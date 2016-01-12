/**
 * 
 */

(function($){
	
	$.widget("radioalbum.mp3editor",{
		
		url: 'tageditor/',
		
		options : {
			
			container: { id: 'musicList' },
			mediaContainer: { id: 'mediaContent' },
			editContainer : { id: 'musicEditForm' },
			backButton: { id:  'backButton' }, 
			form : { id: "song-form" },
		},
	
		_create: function(){
			var self = this;
			self.container = $('#'+self.options.container.id);
			self.mediaContainer = $('#'+self.options.mediaContainer.id);
			self.editContainer = $('#'+self.options.editContainer.id);
			self.backButton = $('#'+self.options.backButton.id);
			self.form = $('#'+self.options.form.id);
			
			self.depth = new Object;
			self.depth.actual = 0;
			self.depth.prev = 0;
			self.path = [];
			
			$.getJSON(self.url+"navigate", function(data){
				self._buildDirectoryList(data, self);
			})
			
			self.backButton.click(function(){
				self._goBack(self);
				self._navigate(self);
			})
			self.backButton.attr('disabled', 'disabled');
			
			self.editContainer.find('button').click(function(){
				self._setSongTag(self);
			})
		},
		
		_navigate: function(self){
			
			self.actualLocation= self.url+"navigate&path="+self.pathToString;
			
			$.ajax({
				url: self.url+"navigate",
				type: 'POST',
				data: "path="+self.pathToString,
				dataType: 'json',
				success: function(data){
					self._buildDirectoryList(data, self);
				}
			})
		},
		
		_buildPath: function(self, element){
			if (element != null)
				self.path[self.depth.actual] = element.html();
			else
				self.path.pop();
			self.pathToString = self.path.join("/");
		},
		
		_goBack: function(self){
			if (self.depth.actual != 0){
				self._buildPath(self, null);
				self.depth.prev = self.depth.actual;
				self.depth.actual = self.depth.actual - 1;
				if (self.depth.actual == 0)
					self.backButton.attr('disabled', 'disabled');
			} else
				self.backButton.attr('disabled', 'disabled');
		},
		
		_goForward: function(self, element){
			self.backButton.removeAttr('disabled');
			self._buildPath(self, element);
			self.depth.prev = self.depth.actual;
			self.depth.actual = self.depth.actual + 1;
		},
		
		_buildDirectoryList: function(data, self){
			var div = $('#mediaContent');
			div.attr('data-depth', data['depth']);
			div.html('<ul/>');
			
			if (data['dir'] != undefined)
				$.each(data['dir'], function(i, item){
					var li = $('<li />').html(item['name']);
					li.attr('data-type', 'directory');
					div.find('ul').append(li);
					li.click(function(){
						self._goForward(self, $(this));
						self._navigate(self);
					})
				})
			
			if (data['file'] != undefined)
				$.each(data['file'], function(i, item){
					var li = $('<li />').html(item['name']);
					li.attr('data-type', 'file');
					div.find('ul').append(li);
					li.click(function(){
						self._buildPath(self, $(this));
						self._getSongTag(self);
						self._buildPath(self, null);
						
						$(this).siblings().removeClass('active');
						$(this).addClass('active');
					})
				})
		},
		
		_getSongTag: function(self){
			var urlT = self.url+"get-tags";
			self.songForEdit = self.pathToString;
			
			$.ajax({
				url: urlT,
				type: 'POST',
				dataType: 'json',
				data: "path="+encodeURIComponent(self.pathToString),
				success: function(data){
					var inputs = self.form.find('input');
					var d ="";
					inputs.each(function(index){
						if (index>0)
						$(this).val(data[index-1]);
					})
				}
			})
		},
		
		_setSongTag: function(self){
			$.ajax({
				type: "POST",
				url: self.url+"set-tags",
				dataType: 'json',
				data: self.form.serialize()+"&rel="+encodeURIComponent(self.songForEdit),
				success: function(data){
					
					if (data['status'] == 'success')
						$('#editResponse').addClass('text-success').html(data['msg']);
						
					if (data['status'] == 'warning')
						$('#editResponse').addClass('text-warning').html(data['msg']);
						
					if (data['status'] == 'error')
						$('#editResponse').addClass('text-danger').html(data['msg']);
					
					setTimeout(function(){
						$('#editResponse').removeClass().html("");
					}, 800);
				},
				
			})
		},
	
	})	
}(jQuery));
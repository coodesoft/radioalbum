/**
 * 
 */

(function ( $ ) {
	
	$.widget("radioalbum.raSelector", {
		
		_getServerURL: function(){
			return ((location.href.split('/'))[0])+'//'+((location.href.split('/'))[2]) + "/";
		},

		_getMediaServerURL: function(){
			return this._getServerURL() + "ampache/server/xml.server.php";
		},
		
		_getBasePath: function(){
			return "/basic/web";
		},
		
		options :{
			channels : {
				css : {
					width: '100%', height: '100%',
					top: '0%', left: '0%',
				},
				prev : {
					width: '10%', height: '10%',
					top: '0%', left: '0%',
				},
				next : {
					width: '10%', height: '10%',
					top: '0%', right: '0%',
				},
				list : {
					width: '100%', height: '100%',
					top: '0%', left: '0%',
				},

			},
			albums : {
				css : {
					width: '100%', height: '100%',
					top: '0%', left: '0%',
				},
				prev : {
					width: '10%', height: '10%',
					top: '0%', left: '0%',
				},
				next : {
					width: '10%', height: '10%',
					top: '0%', right: '0%',
				},
				list : {
					width: '100%', height: '100%',
					top: '0%', left: '0%',
				},
				marquee : { 
					width: '300px', height: '20px',
					top: '0%', left: '0%', color: 'rgb(163, 163, 163)',
				}

			},		
			sliderType : 'simple',
			playerContainer : { id: 'wp-audio-manipulation' },
			playlist : { id: 'wp-playlist' },
			audio : { id: 'wp-player' },
			skin: "default",
			volumeType : 'Rot',
		},
		
		token: '',
		base : {
				selectorContainer : { id: "wp-music-selector" },								
				channels : {
					wrapper : 		{ id: 'channels-raselector-wrapper' },
					list :			{ id: 'channels-list', 'class' : 'list-container' },
					prevControl	: 	{ id: 'channels-prev-control', 'class' : 'transition-control' },
					nextControl : 	{ id: 'channels-next-control', 'class' : 'transition-control' },
					selectedInfo : 	{ id: 'channels-selected-info' },
					hoverInfo :		{ id: 'channels-hover-info'},
					infoContainer : { id: 'channels-info-container'},
				},
				albums : {
					wrapper : 	 	{ id: 'albums-raselector-wrapper' },
					list :			{ id: 'albums-list', 'class' : 'list-container' },
					prevControl	: 	{ id: 'albums-prev-control', 'class' : 'transition-control' },
					nextControl : 	{ id: 'albums-next-control', 'class' : 'transition-control' },
					selectedInfo : 	{ id: 'albums-selected-info' },
					listenAlbum :	{ id: 'album-listen-container' },
				},
				playback : {
					play:   { id: 'play' },
					pause:  { id: 'pause' },
					prev:   { id: 'prev' },
					next:   { id: 'next' },
					volume: { id: 'wp-volume-control' },
				},
				transitionTime: 300,
		},
		
		ALBUM_ELEMENT_CLASS 		: 'album',
		CHANNEL_ELEMENT_CLASS 		: 'channel',
		OBJECT_VISIBLE_CLASS 		: 'obj-visible',
		OBJECT_HIDDEN_CLASS 		: 'obj-hidden',
		HAS_LOGO_BACKGROUND_CLASS 	: 'hasLogoBackground',
		VISIBLE_CHANNEL_HOVER_CLASS : 'channel-hover-info-visible',
		HIDDEN_CHANNEL_HOVER_CLASS  : 'channel-hover-info-hidden',
		LAST_ALBUMS_CHANNEL			: 'Nuevos',
		
		
		/*
		 * *********** Private Functions ************ 
		 */
		
		/** 
		 * objID: es el elemento al cual le añadimos el recurso.
		 * viewID: es el nombre de la interfaz que vamos a asociar.
		 * any: es un parametro de control. para valores "undefined"
		 * 		o "false" indica que se objID es un identificador 
		 * 		entero de elemento.Ej '.classname', 
		 * 		'[data-(value)="something"]', etc.
		 */
		_associateElementToView: function(objID, viewID, any){
			if (any == undefined || any == false)
				$('#'+objID).attr('data-resource', viewID);
			else
				$(objID).attr('data-resource', viewID)
		},
		
		_create: function() {
			var self = this;
			var mainContainer= '#'+ this.element.attr('id');
			self.slider = new Object;
			self.chselector = new Object;
			self.social = new Object;
			
			// garantizamos la existencia del contetndor de selectores		
			if ((!$('#'+self.base.selectorContainer.id).length)){
				var slContainer = $('<div />').attr(self.base.selectorContainer);
				mainContainer.append(slContainer);
			} else
				var slContainer = $('#'+self.base.selectorContainer.id);
				
			
			// si no existe, creamos la estructura de selección. Canales y Álbumes
			if (!$('#'+self.base.channels.wrapper.id).length){
				
				self.channelsWrapper = $('<div />').attr(self.base.channels.wrapper).appendTo(slContainer);
				self.channelsNext 	 = $('<div />').attr(self.base.channels.nextControl).appendTo(self.channelsWrapper);
				self.channelsPrev 	 = $('<div />').attr(self.base.channels.prevControl).appendTo(self.channelsWrapper);
				self.channelsList 	 = $('<div />').attr(self.base.channels.list).appendTo(self.channelsWrapper);
				self.infoContainer	 = $('<div />').attr(self.base.channels.infoContainer).appendTo(self.channelsWrapper);
				self.channelInfo	 = $('<div />').attr(self.base.channels.selectedInfo).appendTo(self.infoContainer);	
				self.hoverInfo		 = $('<div />').attr(self.base.channels.hoverInfo).appendTo(self.infoContainer);	
				
				self.albumsWrapper	 = $('<div />').attr(self.base.albums.wrapper).appendTo(slContainer);
				self.albumsNext		 = $('<div />').attr(self.base.albums.nextControl).appendTo(self.albumsWrapper);
				self.albumsPrev		 = $('<div />').attr(self.base.albums.prevControl).appendTo(self.albumsWrapper);
				self.albumsList		 = $('<div />').attr(self.base.albums.list).appendTo(self.albumsWrapper);
				self.listenAlbum 	 = $('<div />').attr(self.base.albums.listenAlbum).appendTo(self.albumsWrapper);
					
				self._initConnection();
				
			} else{
				self.channelsWrapper	= $('#'+self.base.channels.wrapper.id);
				self.channelsNext 		= $('#'+self.base.channels.nextControl.id);
				self.channelsPrev 		= $('#'+self.base.channels.prevControl.id);
				self.channelsList 		= $('#'+self.base.channels.list.id);
				self.infoContainer 		= $('#'+self.base.channels.infoContainer.id);
				self.channelInfo 		= $('#'+self.base.channels.selectedInfo.id);
				self.hoverInfo 			= $('#'+self.base.channels.hoverInfo.id);
				self.albumsWrapper		= $('#'+self.base.albums.wrapper.id);
				self.albumsNext 		= $('#'+self.base.albums.nextControl.id);
				self.albumsPrev 		= $('#'+self.base.albums.prevControl.id);
				self.albumsList 		= $('#'+self.base.albums.list.id);
				self.listenAlbum		= $('#'+self.base.albums.listenAlbum.id);
			}
			
			// garantizamos la existencia de una estructura de audio y lista de reproducción
			if (!$('#'+self.options.playerContainer.id).length){
				self.playerContainer = $('<div />').attr(self.options.playerContainer).appendTo(mainContainer);
				self.audio = $('<div />').attr(self.options.audio).appendTo(playerContainer);
				self.playlist = $('<div />').attr(self.options.playlist).appendTo(playerContainer);
			} else{
				self.playerContainer = $('#'+self.options.playerContainer.id);
				self.audio = $('#'+self.options.audio.id);
				self.playlist = $('#'+self.options.playlist.id);
			}
			
			self.audio.jPlayer({
			    swfPath: "/js/jplayer",
			    volume:	'0.5',   
			});
			
			self.albumsWrapper.addClass(self.HAS_LOGO_BACKGROUND_CLASS);
			
			$('#'+self.base.albums.nextControl.id).click({'self': self, 'obj': $('#'+self.base.albums.nextControl.id)}, function(event){
				self._nextAlbum(event);
			});
			
			$('#'+self.base.albums.prevControl.id).click({'self': self, 'obj': $('#'+self.base.albums.prevControl.id)}, function(event){
				self._prevAlbum(event);
			});
			
			$('#'+self.base.channels.nextControl.id).click({'self': self, 'obj': $('#'+self.base.channels.nextControl.id)}, function(event){
				self._nextChannel(event);
			});
			
			$('#'+self.base.channels.prevControl.id).click({'self': self, 'obj': $('#'+self.base.channels.prevControl.id)}, function(event){
				self._prevChannel(event);
			});
			
			$('#'+self.audio.attr('id')).on($.jPlayer.event.ended, function(e){
				self._nextPlayBack(self.audio.attr('data-actualplayback'));
			})
			
			self.element.on($.fn.raSelector.event.channelsReady, function(){
				//var genreID = self.channelsList.find('[data-name=Nuevos]').attr('data-id');
				//self._loadAlbumsAsinc(genreID, self);
				self.channelsList.find('[data-name=Nuevos]').click();
			});
			
			self.element.on($.fn.raSelector.event.socialReady, function(){
				var channel = self.options.socialPlay[0];
				var album = self.options.socialPlay[1];

				var url = self._getMediaServerURL();

				$.ajax({
					url: url+"?auth="+token+"&action=tag_albums&filter="+channel,
				})
				.done(function(xml){
					self.slider = $(xml).find('#'+album);
					self._buildAlbumsList(self);
				})
				.fail(function(){
					alert('Ops! Se ha producido un error al recuperar el álbum');
				})
			});
		
		},
		
		_init: function(){
			var self = this;	
	
			//se aplican los estilos que se hayan pasado al llamar al plugin
			//se bindean las funcionalidades minimas.
			self.channelsWrapper.css(self.options.channels.css);
			self.channelsNext.css(self.options.channels.next);
			self.channelsPrev.css(self.options.channels.prev);
			self.channelsList.css(self.options.channels.list);
			self.infoContainer.css(self.options.channels.elementInfo);
			
			self.albumsWrapper.css(self.options.albums.css);
			self.albumsNext.css(self.options.albums.next);
			self.albumsPrev.css(self.options.albums.prev);
			self.albumsList.css(self.options.albums.list);
			self.listenAlbum.css(self.options.albums.marquee);

			var Alist = self.albumsList[0];
			var Clist = self.channelsList[0];
			
			if (Alist.childNodes.length == 0){
				self.albumsPrev.hide();
				self.albumsNext.hide();
			} else
				self._applyAlbumStyleDefinition(self);
				

			if (Clist.childNodes.length == 0){
				self.channelsPrev.hide();
				self.channelsNext.hide();
			} else
				self._applyChannelStyleDefinition(self);

			/** se añade el nombre del skin actual en los controles para adaptar la interfaz
			 */
			self._associateElementToView(self.base.playback.play.id, self.options.skin);
			self._associateElementToView(self.base.playback.pause.id, self.options.skin);
			self._associateElementToView(self.base.playback.next.id, self.options.skin);
			self._associateElementToView(self.base.playback.prev.id, self.options.skin);

			/** Verificar la necesidad de realizar dichas asociaciones  */
			self._associateElementToView(self.base.channels.nextControl.id, self.options.skin);
			self._associateElementToView(self.base.channels.prevControl.id, self.options.skin);
			self._associateElementToView(self.base.albums.nextControl.id, self.options.skin);
			self._associateElementToView(self.base.albums.prevControl.id, self.options.skin);
			
			
			self._associateElementToView('.'+self.CHANNEL_ELEMENT_CLASS, self.options.skin, true);
			$('#'+self.base.playback.volume.id).attr('data-Tipo', self.options.volumeType);		
			
			/*variable de control de comportamiento de botones next y prev del slider*/
			self.transitionAlbumComplete = true;
			self.transitionChannelComplete = true;
			self.element.trigger($.fn.raSelector.event.initReady);
		},
	
		_loadSongsAsinc: function(albumID, nextAlbumID, self){
			var url = self._getMediaServerURL();
			/** el id de un album, en el sistema, se compone del id que le asigna el 
			 *  ampache(un numero entero) seguido de "-album". 
			 *  Es necesario obtener solamente el numero a fin de hacer la llamada
			 *  al servidor para solicitar las canciones.
			 * */
			$.ajax({
				url: url+"?auth="+token+"&action=album_songs&filter="+albumID,
				dataType: 'xml'
			})
			.done(function(xml){
				self.albumPlayback = $('#'+albumID).attr('data-position');
				self._buildPlayList(xml, nextAlbumID, self);		
			})
			.fail(function(){
				alert('Ops! Se ha producido un error al recuperar la lista de canciones');
			})
			
		},
		
		_loadAlbumsAsinc: function(genreID, self){
			var url = this._getMediaServerURL();

			$.ajax({
				url: url+"?auth="+token+"&action=tag_albums&filter="+genreID,
			})
			.done(function(xml){
				self.slider = $(xml).find('album');
				self._buildAlbumsList(self);
			})
			.fail(function(){
				alert('Ops! Se ha producido un error al recuperar la lista de álbumes');
			})
		},

		_loadChannelsAsinc: function(){ 
			var self = this;
			var url = this._getMediaServerURL();

			$.ajax({
				url: url+"?auth="+token+"&action=tags",
				dataType: 'xml'
			})
			.done(function(xml){
				self.chselector = $(xml).find('tag');
				self._buildChannelsList(self);
			})
			.fail(function(){
				alert('Ops! Se ha producido un error al recuperar la lista de géneros');
			})
		},

		
		_entablishConnectionAsinc: function(data){ //no genera vista
			var self = this;
			$.ajax({
				url: data['url']+'action='+data['action']+"&auth="+data['auth']+"&timestamp="+data['timestamp']+"&version="+data['version']+"&user="+data['user'],
				dataType: 'xml' ,
				success: function(data){
					token = $(data).find('auth').text();
					self._loadChannelsAsinc();	
				}
			});
		},
		
		_initConnection: function(){
			var self = this;
			$.ajax({
				url: self._getBasePath()+"/index.php/webplayer/connection-params",
				data: 'action=connect',
				type: 'POST',
				dataType: 'json',
				success: function(data){
					self._entablishConnectionAsinc(data);
					
				 }
			});
		},
		
		/*
		 * *******************************************
		 *           General playback methods
		 *********************************************
		 */
		
		_nextPlayBack: function(songID){
			var nextSong = $('#'+songID).next();
			var self = this;
			
			self._playBack(nextSong.attr('id'), self);
			self.element.trigger($.fn.raSelector.event.next);
			},
	
		_prevPlayBack: function(songID){
			var self = this;
			if (songID != $('.song').first().attr('id')){
				var prevSong = $('#'+songID).prev();
				self._playBack(prevSong.attr('id'), self);
				self.element.trigger($.fn.raSelector.event.prev);
			}
		},
	
		_playBack: function(songID, self){
			
			if (self.audio.attr('data-actualplayback') == songID){
				self.audio.jPlayer('play');
			}else{
				var song = $('#'+songID);
				if (song.attr('data-type') == 'jumper-element'){
					var nextAlbumID = song.attr('data-nextid');
					if (nextAlbumID != 'undefined'){
						self._gotoNextPlayableAlbum(self);
						var albumToPlay = song.attr('data-nextid');
						var nextOfNext = $('#'+albumToPlay).next().attr('id');
						self.social.album = albumToPlay;
						self._loadSongsAsinc(albumToPlay, nextOfNext, self);
						self.element.trigger($.fn.raSelector.event.play);
					} else
						alert('Se ha llegado al final de la lista de reproducción de este Género');
				} else{
					var url = song.attr('data-url');
					song.siblings().attr('data-status', 'stop');
					song.attr('data-status', 'play');
					self.audio.jPlayer('setMedia', { mp3: url }).jPlayer('play');
					self.audio.attr('data-actualplayback', songID);
					self.audio.attr('data-album', self.social.album);
					self.audio.attr('data-channel', self.social.channel);
					
					var text =  $("#"+self.social.album+'-'+self.ALBUM_ELEMENT_CLASS).find('.artist-info').html()+" - ";
						text+=	$("#"+self.social.album+'-'+self.ALBUM_ELEMENT_CLASS).find('.album-info').html()+" - ";
						text+=	song.attr('data-title');
						self.listenAlbum.html(text);
						self.listenAlbum.marquee();
						self.listenAlbum.addClass('active');
					
				self.element.trigger($.fn.raSelector.event.play);
				}
			}
			
		},
		
		_gotoNextPlayableAlbum: function(self){
			var next = parseInt(self.albumPlayback) + 1;
			var actual = self.slider.actual;
			var last = self.slider.last;
			var movs;
			
			if (next > actual){
				movs = next - actual;
				var clock = setInterval(function(){
					$('#'+self.base.albums.nextControl.id).click();
					movs -= 1;
					if (movs == 0){
						clearInterval(clock);
					}
				}, self.base.transitionTime + 50);
					
			}
				
			if (next < actual){
				movs = actual - next;
				if (actual == last)
					movs = movs - 1;
				
				var clock =setInterval(function(){
					$('#'+self.base.albums.prevControl.id).click();
					movs-= 1;
					if (movs == 0){
						clearInterval(clock);
					}
				}, self.base.transitionTime + 50);
			}
				
		},
		
		/*
		 * *************************************************************************************
		 *           Se crean las listas de reproduccion, de canales y de álbumes
		 **************************************************************************************
		 */

		_buildPlayList: function(response, nextAlbumID, self){
			self.playlist.html('<ul></ul>');
			$(response).find('song').each( function (index){
				var sTitulo = $(this).find('title').text();
				var idSong = $(this).attr('id');
	            var urlSong = $(this).find('url').text();
	            self.playlist.find('ul').append("<li id='"+idSong+"' class='song' data-url='"+urlSong+"' data-type='playback' data-title='"+sTitulo+"' data-status='stop'></li>")
			})
			$('.song').first().attr('data-status', 'play');
			self.playlist.find('ul').append('<li id="jpm-el" class="song" data-nextID="'+nextAlbumID+'" data-status="stop" data-type="jumper-element" style="display:none"></li>');
			self.playlist.hide();
			self._playBack($('.song').first().attr('id'), self);
		},

	
		_buildChannelsList: function(self){
			self.chselector.image = new Object;
			self.chselector.first = 0;
			self.chselector.last = self.chselector.length - 1;
			self.chselector.actual = 0;
			self.chselector.image.css = {
				width: '20px', height: '40px', position: 'absolute',
			}
			self.chselector.image.offset = '10px';
			self.channelsList.container = $('<div id="channels-container"></div>');
			var count = 0;
			var newsClone, tmpRef, first;
			$(self.chselector).each(function(index){
				var sNombre = $(this).find('name').text();
				var idGenero = $(this).attr('id');
	            var sGenero = $(this).find('album').text();
	            var newElement = $("<div id='"+idGenero+"-genre' data-id='"+idGenero+"' data-name='"+sNombre+"' class='"+self.CHANNEL_ELEMENT_CLASS+"'></div>");
	            
	            var pos = (count)*(parseInt(self.chselector.image.css.width) + parseInt(self.chselector.image.offset));
	            newElement.css(self.chselector.image.css);
	            newElement.css('left', pos+'px');
	            
            	self.channelsList.container.append(newElement);
	            newElement.click({'self': self, 'obj': newElement}, function(event){
	            	self._loadChannelAlbums(event);
	            	self._showChannelSelected(event);
	            	$('.'+self.CHANNEL_ELEMENT_CLASS).attr('data-status', 'inactive');
	            	$(this).attr('data-status', 'active');
	            	self.social.channel = $(this).attr('data-id');
	            });
	            newElement.mouseenter({'self': self, 'obj': newElement}, function(event){
	            	self._showChannelInfo(event);
	            });
	            newElement.mouseleave(function(){
	            	self.hoverInfo.removeClass(self.OBJECT_VISIBLE_CLASS);
	            	self.hoverInfo.addClass(self.OBJECT_HIDDEN_CLASS);
	    			self.channelInfo.addClass(self.OBJECT_VISIBLE_CLASS);
	            });
	            
	            //obtengo la referencia al canal con los ultimos añadidos para su posterior procesamiento
	            if (sNombre == self.LAST_ALBUMS_CHANNEL){
	            	newsClone = newElement.clone();
	            	tmpRef = newElement;
	            }
	             if (count == 0)
	            	 first = newElement;
	            count++;
			})
			var prevNews = tmpRef.prev();
			tmpRef.insertBefore(first);
			tmpRef.attr('style', first.attr('style'));
			first.insertAfter(prevNews);
			first.attr('style', newsClone.attr('style'));
			
			self.channelsList.html('<div id="channelsList" />');
			$('#channelsList').html(self.channelsList.container);
			self.channelsList.container.css('position', 'absolute');
			
			self._fadeToTransitionControl(self.channelsPrev, self.channelsNext, self.channelsList);

			// se asocia al skin para personalizar la visualizacion de cada canal
			self._associateElementToView('.'+self.CHANNEL_ELEMENT_CLASS, self.options.skin, true);
			self.hoverInfo.addClass(self.OBJECT_HIDDEN_CLASS);
			
			
			/*
			 * Cuando se comaparte lo que se esta escuchando, se asigna a socialPlay un array con el canal
			 * y el album a reproducir. Ahora, por defecto, siempre intentará reproducir el canal "Nuevos".
			 * Para evitar crear una cola de operaciones se crea la siguiente condición. Entonces se lanzará
			 * el evento correspondiente dependiendo de si la carga del sitio esta desencadenada por una
			 * acción regular, o social
			 */
			if (self.options.socialPlay == undefined)
				self.element.trigger($.fn.raSelector.event.channelsReady);
			else
				self.element.trigger($.fn.raSelector.event.socialReady);
		},
		
		_buildAlbumsList: function(self){
			self.albumsList.container = $('<div id="albums-container"></div>');
			var count = 0;
			$(self.slider).each(function(index){
				var sNombre = $(this).find('name').text();
				var idAlbum = $(this).attr('id');
	            var sArtista = $(this).find('artist').text();
	            var artUrl = $(this).find('art').text();
	            var newElement = $("<div id='"+idAlbum+"-album' data-id='"+idAlbum+"' data-name='"+sNombre+"' class='"+self.ALBUM_ELEMENT_CLASS+"' data-position='"+index+"'></div>");
	            var art = $('<img src="'+artUrl+'" class="albumImage">');
	            var info = $('<div id="'+idAlbum+'-info" class="album-information"></div>');
	            info.append(' <div class="info-background"></div> ');
	            info.append('<div class="album-extinfo"><div><span class="artist-info">'+sArtista+'</span><span class="album-info">'+sNombre+'</span></div></div> ');
	            var infoCss = {
	            		width: '100%', height: '100%',
						top: '0%', left: '0%', color: 'black' 
	            }
	            info.css(infoCss);
	            art.css(infoCss);
	            info.find('.info-background').css(infoCss);
	            info.find('.album-extinfo').css(infoCss);
	            
	            newElement.append(art);
	            newElement.append(info);

	            info.mouseenter(function(){
	            	$(this).find('.info-background').fadeTo('fast', 0.7);
	            	$(this).find('.album-extinfo').fadeTo('fast', 0.9);
	            	
	            });
	            info.mouseleave(function(){
	            	$(this).find('.info-background').fadeTo('fast', 0);
	            	$(this).find('.album-extinfo').fadeTo('fast', 0);
	            });
	            

	            self.albumsList.container.append(newElement);
	            count++;
			});
			
			$('body').on('click', '.album',	function(){
				self.social.album = $(this).attr('data-id');
				self._loadAlbumSongs(self, $(this).attr('data-id'), $(this).next().attr('data-id'));
			});

			
			self.albumsList.html('<div id="albumsList" />');
			$('#albumsList').html(self.albumsList.container);
			self.albumsList.container.css('position', 'absolute');
			self.albumsList.container.children('div').shuffle();
			
			self._applyAlbumStyleDefinition(self);
			self.slider.actual = 0;
			
			self._fadeToTransitionControl(self.albumsPrev, self.albumsNext, self.albumsList);

			$('.'+self.ALBUM_ELEMENT_CLASS).first().addClass('first');
			$('.'+self.ALBUM_ELEMENT_CLASS).last().addClass('last');
			
			self.albumsWrapper.removeClass(self.HAS_LOGO_BACKGROUND_CLASS);
			self.element.trigger($.fn.raSelector.event.albumsReady);	
			
			$('.'+self.ALBUM_ELEMENT_CLASS).first().click();
		},
		
		_applyAlbumStyleDefinition: function(self){
			self.slider.image = new Object;
			self.slider.image.css = {
					height : self.options.albums.list.height,
					position: 'absolute',
			}
			if (self.options.sliderType == 'simple')
				self.slider.image.css.width = self.options.albums.list.width ;
			else
				self.slider.image.css.width =  parseInt(self.options.albums.list.width) / 2 ;
			
			self.slider.first = 0;
			self.slider.last = self.slider.length-1;
			
			
			self.albumsList.container.children().each(function(index){
				var position = parseInt(self.slider.image.css.width)*(index);
				$(this).css('left', position);
			}).css(self.slider.image.css);
			
			var containerPosition = -1* parseInt(self.slider.image.css.width)*parseInt(self.albumsList.attr('data-position'));
            self.albumsList.container.css('left', containerPosition);

		},
		
		_applyChannelStyleDefinition: function(self){
			var horizont = self.channelsList.width() + parseInt(self.channelsList.offset().left); 
			
			//obtengo la posicion del lado izquierdo del ultimo elemento y 
			// le sumo el ancho. Eso me da la posición de lado derecho.
			var lastElementPos = parseInt(self.channelsList.container.children(':last').offset().left) + parseInt(self.chselector.image.css.width);
			var firstElementPos = parseInt(self.channelsList.container.children(':first').offset().left);
			
			var channelsListWidth = lastElementPos - firstElementPos;
			var channelsViewportWidth = parseInt(self.channelsList.width());
			var leftShift = horizont - lastElementPos;
			
			if (leftShift > 0){
				if (channelsListWidth < channelsViewportWidth)
					var newLeft = 0;
				else
					var newLeft = self.channelsList.container.position().left + leftShift;
			}
				self.channelsList.container.css('left',newLeft);
			
		},
		
		_showChannelInfo: function(event){
			var self = event.data.self;
			var channel = event.data.obj.attr('data-name');
			var tmp = $('<div />').html(channel);
			tmp.css('display', 'table-cell');
			tmp.css('vertical-align', 'middle');
			self.hoverInfo.addClass(self.OBJECT_VISIBLE_CLASS);
        	self.hoverInfo.removeClass(self.OBJECT_HIDDEN_CLASS);
        	self.channelInfo.addClass(self.OBJECT_HIDDEN_CLASS);
        	self.channelInfo.removeClass(self.OBJECT_VISIBLE_CLASS);
			self.hoverInfo.html(tmp);
		},		

		_showChannelSelected: function(event){
			var self = event.data.self;
			var channel = event.data.obj.attr('data-name');
			var tmp = $('<div />').html(channel);
			tmp.css('display', 'table-cell');
			tmp.css('vertical-align', 'middle');
			tmp.css('color', self.options.channels.elementInfo.color);
			self.channelInfo.addClass(self.OBJECT_VISIBLE_CLASS);
        	self.channelInfo.removeClass(self.OBJECT_HIDDEN_CLASS);
			self.channelInfo.html(tmp);
		},
		
		_nextChannel: function(event){
			var self = event.data.self;
			if (self.transitionChannelComplete){
				self.transitionChannelComplete = false;
				self._showNextChannelElement(self);
			}
		},
		
		_prevChannel: function(event){
			var self = event.data.self;
			if (self.transitionChannelComplete){
				self.transitionChannelComplete = false;
				self._showPrevChannelElement(self);
			}
		},
		
		_nextAlbum: function(event){
			var self = event.data.self;
			if (self.transitionAlbumComplete){
				self.transitionAlbumComplete = false;
				self._showNextAlbumElement(self);
			}
		},
		
		_prevAlbum: function(event){
			var self = event.data.self;
			if (self.transitionAlbumComplete){
				self.transitionAlbumComplete = false;
				self._showPrevAlbumElement(self);
			}			
		},
		
		_loadChannelAlbums: function(event){
			var id = event.data.obj.attr('data-id');
			event.data.self._loadAlbumsAsinc(id, event.data.self);
		},		

		_loadAlbumSongs: function(self, albumID, nextAlbumID){
			self._loadSongsAsinc(albumID, nextAlbumID, self);
		},
		
		_showNextChannelElement: function(self){
			var horizont = self.channelsList.width() + parseInt(self.channelsList.offset().left); 
			
			//obtengo la posicion del lado izquierdo del ultimo elemento y 
			// le sumo el ancho. Eso me da la posición de lado derecho.
			var lastElementPos = parseInt(self.channelsList.container.children(':last').offset().left) + parseInt(self.chselector.image.css.width);
			
			if (lastElementPos > horizont){
				var newleft = parseInt(self.chselector.image.css.width) + parseInt(self.chselector.image.offset);
				self.channelsList.container.stop().animate({
					left: "-="+newleft+"px"
				}, self.base.transitionTime, function(){
					self.transitionChannelComplete = true;
					self.chselector.actual += 1;
				});				
			} else
				self.transitionChannelComplete = true;
		},
		
		_showPrevChannelElement: function(self){
			var stop = false;
			if (self.chselector.actual == self.chselector.first)
				stop = true;
			
			if (!stop){
				var newleft = parseInt(self.chselector.image.css.width) + parseInt(self.chselector.image.offset);
				self.channelsList.container.stop().animate({
					left: "+="+newleft+"px"
				}, self.base.transitionTime, function(){
					self.transitionChannelComplete = true;
					self.chselector.actual -= 1;
				});
			} else
				self.transitionChannelComplete = true;
		},
		
		_showNextAlbumElement: function(self){
			var stop = false;
			if (self.options.sliderType == 'simple'){
				if (self.slider.actual == self.slider.last)
					stop = true;
			} else
				if (self.slider.actual + 1 >= self.slider.last)
					stop = true;
			if (!stop){
				var newleft = parseInt(self.slider.image.css.width);
				self.albumsList.container.stop().animate({
					left: "-="+newleft+"px"
				}, self.base.transitionTime, function(){
					self.transitionAlbumComplete = true;
				});
				self.slider.actual += 1;
				self.albumsList.attr('data-position', self.slider.actual);
			} else
				self.transitionAlbumComplete = true; 			

		},
		
		_showPrevAlbumElement: function(self){
			var stop = false;
			if (self.slider.actual == self.slider.first)
				stop = true;
			if (!stop){
				var newleft = parseInt(self.slider.image.css.width);
				self.albumsList.container.stop().animate({
					left: "+="+newleft+"px"
				}, self.base.transitionTime, function(){
					self.transitionAlbumComplete = true;
				});
				self.slider.actual -= 1;
				self.albumsList.attr('data-position', self.slider.actual);
			} else
				self.transitionAlbumComplete = true
		},
		
		_fadeToTransitionControl: function(prev, next, elementList){
			var self = this;

			prev.addClass(self.OBJECT_HIDDEN_CLASS);
			next.addClass(self.OBJECT_HIDDEN_CLASS);
			prev.show();
			next.show();
				
			var container = elementList.parent();
			container.mouseenter(function(){
				prev.removeClass(self.OBJECT_HIDDEN_CLASS);
				prev.addClass(self.OBJECT_VISIBLE_CLASS);
				next.removeClass(self.OBJECT_HIDDEN_CLASS);
				next.addClass(self.OBJECT_VISIBLE_CLASS);
				
			});
			container.mouseleave(function(){
				prev.removeClass(self.OBJECT_VISIBLE_CLASS);
				prev.addClass(self.OBJECT_HIDDEN_CLASS);
				next.removeClass(self.OBJECT_VISIBLE_CLASS);
				next.addClass(self.OBJECT_HIDDEN_CLASS);
			});			
		},
		
		/*
		 * *********** Public Functions ************ 
		 */
		
		play: function(){
			this._playBack($('.song[data-status="play"]').attr('id'), this);
		},
		
		pause: function(){
			this.audio.jPlayer('pause');
			this.element.trigger($.fn.raSelector.event.pause);	
		},
		
		next: function(){
			this._nextPlayBack(this.audio.attr('data-actualplayback'));
		},
		
		prev: function(){
			this._prevPlayBack(this.audio.attr('data-actualplayback'));
		},

		socialPlay: function(arr){
		 
			
		},
	});

	$.fn.raSelector.event = {};
	$.each(
		[
	        'play',
	        'pause',
	        'next',
	        'prev',
	        'albumsReady',
	        'channelsReady',
	        'initReady',
	        'socialReady'
	    ],
	    function() {
			$.fn.raSelector.event[ this ] = 'raSelector_' + this;
		})

}( jQuery ));

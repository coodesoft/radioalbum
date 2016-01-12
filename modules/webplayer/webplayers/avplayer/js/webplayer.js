/**
 * 
 */
	
$(function(){
	

	$('body').on('avplayer', '#webplayer', function(){
		
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '50%', height: '59px',
					top: '64%', left: '12.5%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '22%', left: '4%'
				},
				next: {
					width: '0%', height: '0%',
					top: '22%', right: '5.7%'
				},
				list: {
					width: '72%', height: '59%',
					top: '6px', left: '50px'
				},
				imgSelector: {
					width: '18px', height: '34px',
					top: '6px', left: '9px',
				},
				elementInfo : {
					width: '96%', height: '28px',
					top: '58%', left: '2%',
				},
			},
			albums: {
				css: { 
					width: '78%', height: '204px',
					top: '16%', left: '11%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '30%', left: '14%'
				},
				next: {
					width: '0%', height: '0%',
					top: '30%', right: '14%'
				},
				list: {
					width: '300px', height: '150px',
					top: '10px', left: '128px'
				},
				marquee : { 
					width: '54%', height: '20px',
					top: '81%', left: '24%',
				},
			},
			sliderType : 'doble',
			skin: 'avplayer',
			volumeType : 'Rot',
		});
		setDefaultSkinValues();
	})
})
/**
 * 
 */
$(function(){

	$('body').on('svplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '22%', height: '29px',
					top: '52%', left: '33.5%'
				},
				prev: {
					width: '18%', height: '80%',
					top: '4%', left: '0%'
				},
				next: {
					width: '18%', height: '80%',
					top: '4%', right: '0%'
				},
				list: {
					width: '72%', height: '65%',
					top: '3px', left: '22px'
				},
				imgSelector: {
					width: '18px', height: '90%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '92%', height: '50px',
					top: '106%', left: '6%',
				}
			},
			albums: {
				css: { 
					width: '90%', height: '146px',
					top: '15%', left: '4%'
				},
				prev: {
					width: '15%', height: '65%',
					top: '14%', left: '10%'
				},
				next: {
					width: '15%', height: '65%',
					top: '14%', right: '10%'
				},
				list: {
					width: '240px', height: '120px',
					top: '2px', left: '189px'
				},
				marquee : { 
					width: '241px', height: '20px',
					top: '84%', left: '30%'
				},
			},
			sliderType : 'doble',
			skin: 'svplayer',
			volumeType: 'Rot',

		});
		setDefaultSkinValues();
	})
})
	


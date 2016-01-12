/**
 * 
 */
 
$(function(){

	$('body').on('lvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '61.5%', height: '23px',
					top: '47%', left: '16.5%'
				},
				prev: {
					width: '6%', height: '94%',
					top: '11%', left: '3.4%'
				},
				next: {
					width: '6%', height: '94%',
					top: '11%', right: '2.7%'
				},
				list: {
					width: '84%', height: '69%',
					top: '3px', left: '36px'
				},
				imgSelector: {
					width: '18px', height: '100%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '136px', height: '48px',
					top: '-59px', left: '16px',
				}
			},
			albums: {
				css: { 
					width: '61%', height: '119px',
					top: '58%', left: '19%'
				},
				prev: {
					width: '12%', height: '50%',
					top: '25%', left: '2%'
				},
				next: {
					width: '12%', height: '50%',
					top: '25%', right: '2%'
				},
				list: {
					width: '200px', height: '100px',
					top: '-5px', left: '113px'
				},
				marquee : { 
					width: '197px', height: '20px',
					top: '80%', left: '27%'
				},
			},
			sliderType : 'doble',
			skin: 'lvplayer',
			volumeType: 'Ver',

		});
		setDefaultSkinValues();
	})
})
	


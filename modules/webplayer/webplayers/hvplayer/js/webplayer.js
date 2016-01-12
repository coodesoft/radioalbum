/**
 * 
 */
$(function(){

	$('body').on('hvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '60%', height: '49px',
					top: '19%', left: '25.5%'
				},
				prev: {
					width: '8%', height: '51%',
					top: '-9%', left: '-4%'
				},
				next: {
					width: '8%', height: '51%',
					top: '-11%', right: '21%'
				},
				list: {
					width: '69%', height: '32%',
					top: '2px', left: '13px'
				},
				imgSelector: {
					width: '18px', height: '90%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '58%', height: '30px',
					top: '224px', left: '43%',
				}
			},
			albums: {
				css: { 
					width: '78%', height: '147px',
					top: '34%', left: '9%'
				},
				prev: {
					width: '16%', height: '63%',
					top: '19%', left: '10%'
				},
				next: {
					width: '16%', height: '63%',
					top: '19%', right: '10%'
				},
				list: {
					width: '220px', height: '110px',
					top: '13px', left: '145px'
				},
				marquee : { 
					width: '257px', height: '20px',
					top: '85%', left: '27%'
				},
			},
			sliderType : 'doble',
			skin: 'hvplayer',
			volumeType: 'Hor',
		});
		setDefaultSkinValues();
	})
})
	


/**
 * 
 */
$(function(){

	$('body').on('xvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '40%', height: '40px',
					top: '81%', left: '26.5%'
				},
				prev: {
					width: '11%', height: '70%',
					top: '11%', left: '3.4%'
				},
				next: {
					width: '11%', height: '70%',
					top: '11%', right: '2.7%'
				},
				list: {
					width: '72%', height: '65%',
					top: '6px', left: '42px'
				},
				imgSelector: {
					width: '9%', height: '25px',
					top: '96%', left: '-48%'
				},
				elementInfo : {
					width: '163%', height: '28px',
					top: '122%', left: '-61%',
				}
			},
			albums: {
				css: { 
					width: '95%', height: '314px',
					top: '11%', left: '2%'
				},
				prev: {
					width: '14%', height: '35%',
					top: '33%', left: '1%'
				},
				next: {
					width: '14%', height: '35%',
					top: '33%', right: '1%'
				},
				list: {
					width: '460px', height: '230px',
					top: '44px', left: '15%'
				},
				marquee : { 
					width: '460px', height: '20px',
					top: '90%', left: '15%'
				},
			},			
			sliderType : 'doble',
			skin: 'xvplayer',
			volumeType: 'Hor', 
		});
		setDefaultSkinValues();
	})
})
	


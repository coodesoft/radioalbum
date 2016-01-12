/**
 * 
 */
$(function(){

	$('body').on('wvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '44%', height: '59px',
					top: '81%', left: '23.5%'
				},
				prev: {
					width: '11%', height: '60%',
					top: '11%', left: '3.4%'
				},
				next: {
					width: '11%', height: '60%',
					top: '11%', right: '2.7%'
				},
				list: {
					width: '72%', height: '65%',
					top: '6px', left: '50px'
				},
				imgSelector: {
					width: '10%', height: '35px',
					top: '2px', left: '-48%'
				},
				elementInfo : {
					width: '148%', height: '28px',
					top: '90%', left: '-50%', 
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
			skin: 'wvplayer',
			volumeType: 'HorD',

		});
		setDefaultSkinValues();
	})
})

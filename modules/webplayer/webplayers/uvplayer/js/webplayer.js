/**
 * 
 */
$(function(){

	$('body').on('uvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '60%', height: '59px',
					top: '35%', left: '19.5%'
				},
				prev: {
					width: '6%', height: '71%',
					top: '11%', left: '3.4%'
				},
				next: {
					width: '6%', height: '71%',
					top: '11%', right: '2.7%'
				},
				list: {
					width: '88%', height: '20px',
					top: '19px', left: '23px',
				},
				imgSelector: {
					width: '18px', height: '15px',
					top: '6px', left: '9px',
				},
				elementInfo : {
					width: '59%', height: '28px',
					top: '67%', left: '33%',
				},
			},
			albums: {
				css: { 
					width: '58%', height: '123px',
					top: '6%', left: '20%'
				},
				prev: {
					width: '20%', height: '83%',
					top: '1%', left: '1%'
				},
				next: {
					width: '20%', height: '83%',
					top: '1%', right: '1%'
				},
				list: {
					width: '180px', height: '90px',
					top: '16px', left: '108px'
				},
				marquee : { 
					width: '178px', height: '20px',
					top: '86%', left: '27%'
				},
			},
			sliderType : 'doble',
			skin: 'uvplayer',
			volumeType: 'Ver',

		});
		setDefaultSkinValues();
	})
})
	


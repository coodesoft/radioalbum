/**
 * 
 */

$(function(){

	$('body').on('qvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '88%', height: '33px',
					top: '53%', left: '6%'
				},
				prev: {
					width: '6%', height: '77%',
					top: '11%', left: '0%'
				},
				next: {
					width: '6%', height: '77%',
					top: '11%', right: '34.5%'
				},
				list: {
					width: '53%', height: '47%',
					top: '9px', left: '35px'
				},
				imgSelector: {
					width: '18px', height: '90%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '34%', height: '28px',
					top: '4px', left: '65%',
				}
			},
			albums: {
				css: { 
					width: '68%', height: '127px',
					top: '61%', left: '16%'
				},
				prev: {
					width: '17%', height: '72%',
					top: '20%', left: '13%'
				},
				next: {
					width: '17%', height: '72%',
					top: '20%', right: '13%'
				},
				list: {
					width: '220px', height: '110px',
					top: '16px', left: '25%'
				},
				marquee : { 
					width: '220px', height: '20px',
					top: '-3%', left: '25%'
				},
			},
			sliderType : 'doble',
			skin: 'qvplayer',
			volumeType: 'Ver',
		});
		setDefaultSkinValues('qvplayer', 'Ver');
	})
})
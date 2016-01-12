/**
 * 
 */
$(function(){
	$('body').on('cvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '39%', height: '91px',
					top: '68%', left: '30.5%'
				},
				prev: {
					width: '11%', height: '60%',
					top: '11%', left: '4.4%'
				},
				next: {
					width: '11%', height: '60%',
					top: '11%', right: '5.7%'
				},
				list: {
					width: '73%', height: '32%',
					top: '30px', left: '37px'
				},
				imgSelector: {
					width: '15px', height: '100%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '68%', height: '28px',
					top: '66px', left: '5%'
				}
			},
			albums: {
				css: { 
					width: '42%', height: '140px',
					top: '16%', left: '29%'
				},
				prev: {
					width: '19%', height: '47%',
					top: '28%', left: '2%'
				},
				next: {
					width: '19%', height: '47%',
					top: '28%', right: '2%'
				},
				list: {
					width: '125px', height: '125px',
					top: '10px', left: '86px'
				},
				marquee : { 
					width: '220px', height: '20px',
					top: '107%', left: '13%',
				},
			},
			sliderType : 'simple',
			skin: 'cvplayer',
			volumeType: 'Rot',
		});
		setDefaultSkinValues();
	})
})
	


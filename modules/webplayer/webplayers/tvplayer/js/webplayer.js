/**
 * 
 */
$(function(){

	$('body').on('tvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '50%', height: '39px',
					top: '1.5%', left: '24%'
				},
				prev: {
					width: '8%', height: '60%',
					top: '25%', left: '3%'
				},
				next: {
					width: '8%', height: '60%',
					top: '25%', right: '1%'
				},
				list: {
					width: '79%', height: '39%',
					top: '13px', left: '43px'
				},
				imgSelector: {
					width: '10px', height: '34px',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '78%', height: '31px',
					top: '132%', left: '13%',
				}
			},
			albums: {
				css: { 
					width: '43%', height: '175px',
					top: '23%', left: '28%'
				},
				prev: {
					width: '20%', height: '49%',
					top: '16%', left: '2%'
				},
				next: {
					width: '20%', height: '49%',
					top: '16%', right: '2%'
				},
				list: {
					width: '130px', height: '130px',
					top: '2px', left: '81px'
				},
				marquee : { 
					width: '260px', height: '20px',
					top: '82%', left: '6%'
				},
			},
			sliderType : 'simple',
			skin: 'tvplayer',
			volumeType: 'Rot',

		});
		setDefaultSkinValues();
	})
})
	


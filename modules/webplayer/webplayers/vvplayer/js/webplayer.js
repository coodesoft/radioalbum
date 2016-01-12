/**
 * 
 */
$(function(){

	$('body').on('vvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '24%', height: '24px',
					top: '78%', left: '14%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '-4%', left: '3.4%'
				},
				next: {
					width: '0%', height: '0%',
					top: '-4%', right: '2.7%'
				},
				list: {
					width: '72%', height: '65%',
					top: '1px', left: '25px'
				},
				imgSelector: {
					width: '18px', height: '90%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '210px', height: '28px',
					top: '176%', left: '-1%',
				}
			},
			albums: {
				css: { 
					width: '73%', height: '142px',
					top: '19%', left: '14%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '36%', left: '10%'
				},
				next: {
					width: '0%', height: '0%',
					top: '36%', right: '10%'
				},
				list: {
					width: '250px', height: '125px',
					top: '19px', left: '132px'
				},
				marquee : { 
					width: '206px', height: '20px',
					top: '242%', left: '0%'
				},
			},
			sliderType : 'doble',
			skin: 'vvplayer',
			volumeType: 'Hor',

		});
		setDefaultSkinValues();
	})
})
	


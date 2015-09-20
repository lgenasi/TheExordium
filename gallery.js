$(document).ready(function(){

	//Dropzone creation
	Dropzone.options.myDropzone = {
		autoProcessQueue: false,
		addRemoveLinks: true,
		dictRemoveFile: "Remove",
		parallelUploads: 4,
		maxFiles: 4,

		init: function() {
			myDropzone = this;

			this.on("queuecomplete", function(){
				setTimeout(function(){ 
					$("#uploadModal").modal('hide');
				}, 1000);
				$(".alert").delay(2000).slideDown(1000);
				$(".alert").delay(2000).slideUp(1000);
			});
		}
	}
});
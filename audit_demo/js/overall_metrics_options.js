function overall_metrics()
{
if(document.images)
	  {
	  idx=document.overall_metrics_form.metric.options[document.overall_metrics_form.metric.selectedIndex].text
	  document.overall_metrics_name.src = "img/overall_"+idx+".jpg"
	  }
}
window.onerror = null;

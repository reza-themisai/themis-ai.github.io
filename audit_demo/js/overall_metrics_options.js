function overall_metrics()
{
	if(document.images)
	{
	  idx=document.overall_metrics_form.metric.options[document.overall_metrics_form.metric.selectedIndex].text
	  console.log(idx)
	  if(idx=="accuracy")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_accuracy.html"
	  }
	  else if (idx=="f1")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_macro_avg-f1-score.html"
	  }
	  else if (idx=="precision")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_macro_avg-precision.html"
	  }
	  else if (idx=="recall")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_macro_avg-recall.html"
	  }
	  else if (idx=="weighted f1")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_weighted_avg-f1-score.html"
	  }
	  else if (idx=="weighted recall")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_weighted_avg-recall-score.html"
	  }
	  else if (idx=="weighted precision")
	  {
		  document.overall_metrics_name.data = "demo_material/Comparison_of_model_accuracies_for_weighted_avg-precision.html"
	  }
	}
}
window.onerror = null;

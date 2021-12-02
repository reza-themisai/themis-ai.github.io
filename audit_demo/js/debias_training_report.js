function overall_metrics()
{
  idx=document.overall_metrics_form.metric.options[document.overall_metrics_form.metric.selectedIndex].text
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

function label_metrics()
{
if(document.images)
  {
	  idx=document.label_metrics_form.metric.options[document.label_metrics_form.metric.selectedIndex].text.charAt(0)
	  document.label_metrics_name.data = "demo_material/model_comparison_metrics_label_"+idx+".html"
	  console.log(document.label_metrics_name.data)
  }
}

function advanced_metrics()
{
  idx=document.advanced_metrics_form.metric.options[document.advanced_metrics_form.metric.selectedIndex].text
  if(idx=="train loss")
  {
	  document.advanced_metrics_name.data = "demo_material/Training_and_Accuracy_Metrics_for_uniform_on_histories.html"
  }
}
window.onerror = null;

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
	  document.label_metrics_name.data = "demo_material/debias_training/model_comparison_metrics_label_"+idx+".html"
	  console.log(document.label_metrics_name.data)
  }
}

function advanced_metrics_baseline_model()
{
	idx=document.baseline_model_advanced_metrics_form.metric.options[document.baseline_model_advanced_metrics_form.metric.selectedIndex].text
	console.log(idx)

  if(idx=="train loss")
  {
	  document.baseline_model_advanced_metrics_name.data = "demo_material/debias_training/uniform_model_history_plots.html"
  }
	else if(idx=="label accuracy")
  {
	  document.baseline_model_advanced_metrics_name.data = "demo_material/debias_training/uniform_model_label_acc_row.html"
  }
	else if(idx=="meta accuracy per cluser")
  {
	  document.baseline_model_advanced_metrics_name.data = "demo_material/debias_training/uniform_model_meta_accs_per_cluster_row.html"
  }
	else if(idx=="meta accuracy")
	{
		document.baseline_model_advanced_metrics_name.data = "demo_material/debias_training/uniform_model_meta_accs_plot.html"
	}
}

function advanced_metrics_debiased_model()
{
	idx=document.debiased_model_advanced_metrics_form.metric.options[document.debiased_model_advanced_metrics_form.metric.selectedIndex].text
  if(idx=="train loss")
  {
	  document.debiased_model_advanced_metrics_name.data = "demo_material/debias_training/debiased_model_history_plots.html"
  }
	else if(idx=="label accuracy")
  {
	  document.debiased_model_advanced_metrics_name.data = "demo_material/debias_training/debiased_model_label_acc_row.html"
  }
	else if(idx=="meta accuracy per cluser")
  {
	  document.debiased_model_advanced_metrics_name.data = "demo_material/debias_training/debiased_model_meta_accs_per_cluster_row.html"
  }
	else if(idx=="meta accuracy")
	{
		document.debiased_model_advanced_metrics_name.data = "demo_material/debias_training/debiased_model_meta_accs_plot.html"
	}
}

function training_history()
{
	idx=document.training_history_form.metric.options[document.training_history_form.metric.selectedIndex].text
  if(idx=="train weighted loss")
  {
	  document.training_history_name.data = "demo_material/debias_training/training_history_comparison_plot_train__weighted_loss.html"
  }
	else if(idx=="train prediction loss")
  {
	  document.training_history_name.data = "demo_material/debias_training/training_history_comparison_plot_train__prediction_loss.html"
  }
	else if(idx=="test weighted loss")
  {
	  document.training_history_name.data = "demo_material/debias_training/training_history_comparison_plot_test__weighted_loss.html"
  }
	else if(idx=="test prediction loss")
	{
		document.training_history_name.data = "demo_material/debias_training/training_history_comparison_plot_test__prediction_loss.html"
	}
}

window.onerror = null;

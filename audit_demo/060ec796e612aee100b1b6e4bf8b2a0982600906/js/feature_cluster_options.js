if(document.images)
{
bild = new Array()
for(i=0;i<3;i++)
	  {
	  bild[i] = new Image(60,60)
	  bild[i].src = "img/feature_cluster_" + i + ".jpg"
	  }
}
function feature_cluster()
{
if(document.images)
	  {
	  idx=document.feature_cluster_form.classes.options[document.feature_cluster_form.classes.selectedIndex].text.charAt(0)
	  document.feature_cluster_name.data = "demo_material/scatterplot_original_projection_for_label_"+idx+".html"
	  console.log(document.feature_cluster_name.data)
	  }
}
window.onerror = null;

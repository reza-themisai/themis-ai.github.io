if(document.images)
{
bild = new Array()
for(i=0;i<3;i++)
	  {
	  bild[i] = new Image(60,60)
	  bild[i].src = "img/class_cluster_" + i + ".jpg"
	  }
}
function class_cluster()
{
if(document.images)
	  {
	  idx=document.class_cluster_form.classes.options[document.class_cluster_form.classes.selectedIndex].text.charAt(0)
	  document.class_cluster_name.data = "demo_material/scatterplot_re_projection_for_label_"+idx+".html"
	  }
}
window.onerror = null;

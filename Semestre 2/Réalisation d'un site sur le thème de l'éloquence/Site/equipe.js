//adresse des images

myPix = new Array("Equipe/photo_sylla.jpg","Equipe/photo_stéphane.jpg","Equipe/photo_thirisan.jpg", "Equipe/photo_faty.jpg", "Equipe/photo_yassine.jpg", "Equipe/photo_maxime.jpg");

//changement automatique

//vitesse de defilement en milliseconds

speed = 3000;
i = 0;
function autoSlideShow(imgname) {
  if (document.images)
  {
    document.getElementById(imgname).src = myPix[i];
    i++;
    if (i > myPix.length-1) i = 0;
    b=imgname;
    objet_timer = setTimeout('autoSlideShow(b)',speed);
  }
}
//arreter le defilement
function arret() {
	clearTimeout(objet_timer);
}
//prechargement des images de Dreamweaver
function preload() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=preload.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

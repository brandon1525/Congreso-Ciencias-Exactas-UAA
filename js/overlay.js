google.maps.__gjsload__('overlay', function(_){'use strict';var gz=_.na("b"),hz=_.k(),iz=function(){var a=this.eg;if(this.getPanes()){if(this.getProjection()){if(!a.b&&this.onAdd)this.onAdd();a.b=!0;this.draw()}}else{if(a.b)if(this.onRemove)this.onRemove();else this.remove();a.b=!1}},jz=function(a){a.eg=a.eg||new hz;return a.eg},kz=function(a){_.Lf.call(this);this.Z=(0,_.v)(iz,a)};_.w(gz,_.G);
gz.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.C(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:null))};_.w(kz,_.Lf);_.mc("overlay",{Vk:function(a){var b=a.getMap(),c=jz(a),d=c.jn;c.jn=b;d&&(c=jz(a),(d=c.da)&&d.unbindAll(),(d=c.ri)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.y(c.S,_.E.removeListener),c.S=null,c.Sa&&(c.Sa.Z(),c.Sa=null),_.bn("Ox","-p",a));if(b){c=jz(a);d=c.Sa;d||(d=c.Sa=new kz(a));_.y(c.S||[],_.E.removeListener);var e=c.da=c.da||new _.sm,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",
f);e=c.ri=c.ri||new gz(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.v)(d.M,d);c.S=[_.E.addListener(a,"panes_changed",e),_.E.addListener(f,"zoom_changed",e),_.E.addListener(f,"offset_changed",e),_.E.addListener(b,"projection_changed",e),_.E.addListener(f,"projectioncenterq_changed",e),_.E.forward(b,"forceredraw",d)];d.M();b instanceof _.Vd&&(_.Zm(b,"Ox"),_.an("Ox","-p",a,!!b.b))}}});});

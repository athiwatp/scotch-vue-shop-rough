webpackJsonp([1,2],[,,function(t,e,r){"use strict";r.d(e,"e",function(){return a}),r.d(e,"f",function(){return n}),r.d(e,"g",function(){return o}),r.d(e,"h",function(){return s}),r.d(e,"i",function(){return c}),r.d(e,"b",function(){return i}),r.d(e,"j",function(){return u}),r.d(e,"c",function(){return d}),r.d(e,"k",function(){return l}),r.d(e,"d",function(){return p}),r.d(e,"n",function(){return m}),r.d(e,"o",function(){return f}),r.d(e,"l",function(){return v}),r.d(e,"m",function(){return _}),r.d(e,"a",function(){return h});var a="ALL_PRODUCTS",n="ALL_PRODUCTS_SUCCESS",o="PRODUCT_BY_ID",s="PRODUCT_BY_ID_SUCCESS",c="ADD_PRODUCT",i="ADD_PRODUCT_SUCCESS",u="UPDATE_PRODUCT",d="UPDATE_PRODUCT_SUCCESS",l="REMOVE_PRODUCT",p="REMOVE_PRODUCT_SUCCESS",m="ADD_TO_CART",f="REMOVE_FROM_CART",v="ALL_MANUFACTURER",_="ALL_MANUFACTURER_SUCCESS",h="ERROR_MSG"},,,,,,,,,,,,,,,,,,,,function(t,e,r){var a=r(0)(r(56),r(121),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(57),r(119),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(58),r(114),null,null);t.exports=a.exports},function(t,e,r){"use strict";var a=r(4),n=r(124),o=r(51),s=r(48),c=r(50),i=r(49);a.a.use(n.a),e.a=new n.a({routes:[o.a,s.a,c.a,i.a]})},function(t,e,r){"use strict";var a=r(6),n=r.n(a),o=r(4),s=r(126),c=r(53),i=r(54),u=r(52);o.a.use(s.a),e.a=new s.a.Store({strict:!0,state:{cart:[],showLoader:!1,product:{},products:[],manufacturers:[]},mutations:n()({},i.a,i.b,i.c),getters:n()({},c.a,c.b),actions:n()({},u.a,u.b)})},,function(t,e,r){r(98);var a=r(0)(r(55),r(123),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",function(){return a});var a="https://scotch-vue-shop-api.herokuapp.com/api/v1"},function(t,e,r){"use strict";var a=r(105),n=r.n(a),o=r(106),s=r.n(o),c=r(107),i=r.n(c),u=r(104),d=r.n(u);e.a={path:"/admin",component:n.a,children:[{path:"new",name:"New",component:s.a},{path:"",name:"Products",component:i.a},{path:"edit/:id",name:"Edit",component:d.a}]}},function(t,e,r){"use strict";var a=r(108),n=r.n(a);e.a={path:"/cart",name:"Cart",component:n.a}},function(t,e,r){"use strict";var a=r(109),n=r.n(a);e.a={path:"/details/:id",name:"Details",component:n.a}},function(t,e,r){"use strict";var a=r(110),n=r.n(a);e.a={path:"/",name:"Home",component:n.a}},function(t,e,r){"use strict";var a=r(29),n=r.n(a),o=r(47),s=r(2);r.d(e,"a",function(){return c}),r.d(e,"b",function(){return i});var c={allProducts:function(t){var e=t.commit;e(s.e),n.a.get(o.a+"/products").then(function(t){e(s.f,t.data)})},productById:function(t,e){var r=t.commit;r(s.g),n.a.get(o.a+"/products/"+e).then(function(t){console.log(e,t.data),r(s.h,t.data)})},addProduct:function(t,e){var r=t.commit;r(s.i),n.a.post(o.a+"/products",e).then(function(t){r(s.b,t.data)})},updateProduct:function(t,e){var r=t.commit;r(s.j),n.a.put(o.a+"/products/"+e._id,e).then(function(t){r(s.c,t.data)})},removeProduct:function(t,e){var r=t.commit;r(s.k),n.a.delete(o.a+"/products/"+e,e).then(function(t){console.debug("response",t.data),r(s.d,t.data)})}},i={allManufacturers:function(t){var e=t.commit;e(s.l),n.a.get(o.a+"/manufacturers").then(function(t){e(s.m,t.data)})}}},function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n});var a={allProducts:function(t,e){return t.products},productById:function(t,e){return function(r){return e.allProducts.length>0?e.allProducts.filter(function(t){return t._id===r})[0]:t.product}},allManufacturers:function(t){return t.manufacturers}},n={allManufacturers:function(t){return t.manufacturers}}},function(t,e,r){"use strict";var a=r(68),n=r.n(a),o=r(69),s=r.n(o),c=r(2);r.d(e,"a",function(){return l}),r.d(e,"b",function(){return p}),r.d(e,"c",function(){return m});var i,u,d,l=(i={},n()(i,c.e,function(t){t.showLoader=!0}),n()(i,c.f,function(t,e){t.showLoader=!1,t.products=e}),n()(i,c.g,function(t){t.showLoader=!0}),n()(i,c.h,function(t,e){t.showLoader=!1,t.product=e}),n()(i,c.i,function(t,e){t.showLoader=!0}),n()(i,c.b,function(t,e){t.showLoader=!1,t.products.push(e)}),n()(i,c.j,function(t,e){t.showLoader=!0}),n()(i,c.c,function(t,e){t.showLoader=!1,t.products=t.products.map(function(r){return r._id===e._id?e=s()({},e,{manufacturer:t.manufacturers.filter(function(t){return t._id===e.manufacturer})[0]}):r})}),n()(i,c.k,function(t,e){t.showLoader=!0}),n()(i,c.d,function(t,e){t.showLoader=!1;var r=t.products.findIndex(function(t){return t._id===e});console.debug("index",r),t.products.splice(r,1)}),n()(i,c.a,function(t,e){}),i),p=(u={},n()(u,c.n,function(t,e){return t.cart.push(e)}),n()(u,c.o,function(t,e){var r=t.cart.findIndex(function(t){return t.id===e});t.cart.splice(r,1),console.log(t.cart,t.cart.length,r)}),u),m=(d={},n()(d,c.l,function(t){t.showLoader=!0}),n()(d,c.m,function(t,e){t.manufacturers=e}),d)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(101),n=r.n(a),o=r(2);e.default={name:"app",data:function(){return{cartItems:this.$store.state.cart}},created:function(){this.$store.subscribe(function(t){if(t.payload)switch(t.type){case o.a:n.a.error(t.payload.content,t.payload.title);break;case o.b:n.a.success("Product created.","Success!");break;case o.c:n.a.success("Product updated.","Success!");break;case o.d:n.a.warning("Product deleted.","Deleted!")}})},computed:{cartItemsCount:function(){return this.cartItems.length}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(2);e.default={props:["product"],data:function(){return{cart:this.$store.state.cart}},computed:{isAdding:function(){return this.cart.indexOf(this.product)<0}},methods:{addToCart:function(){this.$store.commit(a.n,this.product)},removeFromCart:function(t){this.$store.commit(a.o,t)}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(22),n=r.n(a);e.default={props:["product"],components:{"product-button":n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(2);e.default={props:["model","manufacturers","isEditing"],created:function(){},methods:{saveProduct:function(){var t=this;console.log(this.fields.valid()),this.$validator.validateAll().then(function(){t.$emit("save-product",t.model)}).catch(function(){t.$store.commit(a.a,{type:"error",title:"Validation!",content:"Please ensure the form is valid."})})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(22),n=r.n(a);e.default={name:"product-item",props:["product"],components:{"product-button":n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(102),n=r.n(a);e.default={name:"product-list",created:function(){0===this.products.length&&this.$store.dispatch("allProducts")},computed:{products:function(){return this.$store.getters.allProducts}},data:function(){return{}},components:{"product-item":n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(6),n=r.n(a),o=r(24),s=r.n(o);e.default={created:function(){this.model.name||(console.log("dispatched"),this.$store.dispatch("productById",this.$route.params.id)),0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},data:function(){return console.log(this.$store.getters.allManufacturers),{}},computed:{manufacturers:function(){return this.$store.getters.allManufacturers},model:function(){var t=this.$store.getters.productById(this.$route.params.id);return n()({},t)}},methods:{updateProduct:function(t){console.log("model",t),this.$store.dispatch("updateProduct",t)}},components:{"product-form":s.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(24),n=r.n(a);e.default={data:function(){return{model:{}}},created:function(){this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers}},methods:{addProduct:function(t){console.log("model",t),this.$store.dispatch("addProduct",t)}},components:{"product-form":n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},computed:{products:function(){return this.$store.getters.allProducts}},created:function(){0===this.products.length&&this.$store.dispatch("allProducts")},methods:{deleteProduct:function(t){console.log(t),this.$store.dispatch("removeProduct",t)}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(23),n=r.n(a);e.default={data:function(){return{cart:this.$store.state.cart}},components:{productDetails:n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(23),n=r.n(a);e.default={created:function(){this.product.name||this.$store.dispatch("productById",this.$route.params.id)},computed:{product:function(){return this.$store.getters.productById(this.$route.params.id)}},data:function(){return{}},components:{"product-details":n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(103),n=r.n(a);e.default={name:"home",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{"product-list":n.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,,function(t,e,r){var a=r(0)(r(59),r(116),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(60),r(118),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(61),r(120),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(null,r(117),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(62),r(113),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(63),r(115),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(64),r(112),null,null);t.exports=a.exports},function(t,e,r){var a=r(0)(r(65),r(122),null,null);t.exports=a.exports},function(t,e,r){r(97);var a=r(0)(r(66),r(111),"data-v-0ecd037a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"products"},[r("div",{staticClass:"container"},[r("product-list")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",[r("i",{staticClass:"fa fa-braille"}),t._v(" In Stock")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.cart.length>0?r("div",[t._l(t.cart,function(t){return[r("product-details",{key:t.id,attrs:{product:t}})]})],2):r("div",{staticClass:"title"},[r("h1",[t._v("Your cart is empty")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("product-form",{attrs:{model:t.model,manufacturers:t.manufacturers},on:{"save-product":t.addProduct}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){e.preventDefault(),t.saveProduct(e)}}},[r("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 col-xs-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,error:t.errors.has("name")},attrs:{type:"text",placeholder:"Name",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||(t.model.name=e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"small text-danger"},[t._v("Name is required")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Price")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.price,expression:"model.price"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("price")},attrs:{type:"number",placeholder:"Price",name:"price"},domProps:{value:t.model.price},on:{input:function(e){e.target.composing||(t.model.price=e.target.value)},blur:function(e){t.$forceUpdate()}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("price"),expression:"errors.has('price')"}],staticClass:"small text-danger"},[t._v("Price is required")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Manufacturer")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.model.manufacturer,expression:"model.manufacturer"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("manufacturer")},attrs:{type:"text",name:"manufacturer"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.model.manufacturer=e.target.multiple?r:r[0]}}},[t._l(t.manufacturers,function(e){return[r("option",{domProps:{value:e._id,selected:e._id==(t.model.manufacturer&&t.model.manufacturer._id)}},[t._v(t._s(e.name))])]})],2),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("manufacturer"),expression:"errors.has('manufacturer')"}],staticClass:"small text-danger"},[t._v("Manufacturer is required")])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Image")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.image,expression:"model.image"},{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],class:{"form-control":!0,error:t.errors.has("image")},attrs:{type:"text",lass:"form-control",placeholder:"Image",name:"image"},domProps:{value:t.model.image},on:{input:function(e){e.target.composing||(t.model.image=e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("image"),expression:"errors.has('image')"}],staticClass:"small text-danger"},[t._v("Image is required and must be a valid URL")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Description")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.description,expression:"model.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("description")},attrs:{type:"number",placeholder:"Description",rows:"5",name:"description"},domProps:{value:t.model.description},on:{input:function(e){e.target.composing||(t.model.description=e.target.value)},blur:function(e){t.$forceUpdate()}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("description"),expression:"errors.has('description')"}],staticClass:"small text-danger"},[t._v("Description is required")])]),t._v(" "),r("div",{staticClass:"form-group new-button"},[r("button",{staticClass:"button"},[r("i",{staticClass:"fa fa-pencil"}),t._v(" "),t.isEditing?r("span",[t._v("Update Product")]):r("span",[t._v("Add Product")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},[r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",t._l(t.products,function(e){return r("tr",[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v("$"+t._s(e.price))]),t._v(" "),r("td",[t._v(t._s(e.manufacturer.name))]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/admin/edit/"+e._id}},[r("i",{staticClass:"fa fa-pencil-square-o"})])],1),t._v(" "),r("td",[r("a",{on:{click:function(r){t.deleteProduct(e._id)}}},[r("i",{staticClass:"fa fa-trash"})])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Manufacturer")]),t._v(" "),r("th"),t._v(" "),r("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},[r("div",{staticClass:"product"},[r("router-link",{staticClass:"product-link",attrs:{to:"/details/"+t.product._id}},[r("div",{staticClass:"product__image"},[r("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"product__description"},[r("small",[t._v(t._s(t.product.manufacturer.name))]),t._v(" "),r("h4",[t._v(t._s(t.product.name))])])]),t._v(" "),r("div",{staticClass:"product__price-cart"},[r("p",[t._v("$"+t._s(t.product.price))]),t._v(" "),r("product-button",{attrs:{product:t.product}})],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"admin-new"},[r("div",{staticClass:"container"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 col-xs-12"},[r("ul",{staticClass:"admin-menu"},[r("li",[r("router-link",{attrs:{to:"/admin"}},[t._v("View Products")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/admin/new"}},[t._v("New Product")])],1)])]),t._v(" "),r("router-view")],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.products,function(t){return[r("product-item",{attrs:{product:t}})]})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image"},[r("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info"},[r("div",{staticClass:"product-details__description"},[r("small",[t._v(t._s(t.product.manufacturer&&t.product.manufacturer.name))]),t._v(" "),r("h3",[t._v(t._s(t.product.name))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.product.description)+"\n          ")])]),t._v(" "),r("div",{staticClass:"product-details__price-cart"},[r("p",[t._v("$"+t._s(t.product.price))]),t._v(" "),r("product-button",{attrs:{product:t.product}})],1)])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("product-form",{attrs:{model:t.model,manufacturers:t.manufacturers,isEditing:!0},on:{"save-product":t.updateProduct}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isAdding?r("button",{staticClass:"button",on:{click:t.addToCart}},[r("i",{staticClass:"fa fa-cart-plus"}),t._v(" Add to Cart")]):r("button",{staticClass:"button button-danger",on:{click:function(e){t.removeFromCart(t.product.id)}}},[r("i",{staticClass:"fa fa-trash"}),t._v(" Remove from Cart")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("product-details",{attrs:{product:t.product,isAdding:!0}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",[r("div",{staticClass:"container"},[r("ul",{staticClass:"nav__left"},[r("li",[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"fa fa-home"}),t._v(" Home")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/admin"}},[r("i",{staticClass:"fa fa-user"}),t._v(" Admin")])],1)]),t._v(" "),r("ul",{staticClass:"nav__right"},[r("li",[r("router-link",{attrs:{to:"/cart"}},[r("i",{staticClass:"fa fa-shopping-cart"}),t._v(" Cart ("+t._s(t.cartItemsCount)+")")])],1)])])]),t._v(" "),r("router-view")],1)},staticRenderFns:[]}},,,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(4),n=r(28),o=r.n(n),s=r(25),c=r(26),i=r(27),u=r.n(i);a.a.config.productionTip=!1,a.a.use(u.a),new a.a({el:"#app",router:s.a,store:c.a,template:"<App/>",components:{App:o.a}})}],[129]);
//# sourceMappingURL=app.103e22a472bbd53062f6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a4bd12"],{"053e":function(t,e,s){},8843:function(t,e,s){"use strict";s("053e")},d879:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Create new post page")]),s("br"),s("br"),s("form",{staticClass:"container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.description,expression:"post.description"}],staticClass:"type",attrs:{type:"text",placeholder:"Type a description here",required:""},domProps:{value:t.post.description},on:{input:function(e){e.target.composing||t.$set(t.post,"description",e.target.value)}}}),s("br"),s("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:t.previewImage}}),s("br"),s("br"),s("button",{staticClass:"choose-image",attrs:{type:"button"},on:{click:t.triggerChooseImg}},[t._v("Choose Image")]),s("br"),s("div",[s("img",{staticClass:"image-preview",attrs:{src:t.post.image}})]),s("button",{staticClass:"create-post",attrs:{type:"button"},on:{click:t.createPost}},[t._v("Create post")])])])},a=[],o=s("2ddf"),r={name:"Create",data:function(){return{post:{description:"",image:null}}},methods:{triggerChooseImg:function(){this.$refs.fileInput.click()},previewImage:function(){var t=this,e=this.$refs.fileInput.files[0],s=new FileReader;s.onload=function(e){t.post.image=e.target.result},s.readAsDataURL(e)},createPost:function(){o["a"].add(this.post),this.$router.push("/")}}},n=r,c=(s("8843"),s("2877")),p=Object(c["a"])(n,i,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-04a4bd12.9f084522.js.map
(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["tools-partials-ExportSettings-vue"],{"824c":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-card",{staticClass:"aioseo-export-settings",attrs:{slug:"exportSettings",toggles:!1,"no-slide":"","header-text":t.strings.exportSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[e("svg-upload")]},proxy:!0}])},[e("div",{staticClass:"export-settings aioseo-settings-row"},[e("grid-row",[e("grid-column",{staticClass:"export-all"},[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.all,callback:function(s){t.$set(t.options,"all",s)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.settings,(function(s,o){return e("grid-column",{key:o,attrs:{sm:"6"}},[t.options.all?t._e():e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options[s.value],callback:function(e){t.$set(t.options,s.value,e)},expression:"options[setting.value]"}},[t._v(" "+t._s(s.label)+" ")]),"all"!==s.value&&t.options.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(s.label)+" ")]):t._e()],1)}))],2)],1),e("div",{staticClass:"export-post-types"},[e("grid-row",[e("grid-column",{staticClass:"export-all"},[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.postOptions.all,callback:function(s){t.$set(t.postOptions,"all",s)},expression:"postOptions.all"}},[t._v(" "+t._s(t.strings.allPostTypes)+" ")])],1),t._l(t.$aioseo.postData.postTypes,(function(s,o){return e("grid-column",{key:o,attrs:{sm:"6"}},[t.postOptions.all?t._e():e("base-checkbox",{attrs:{size:"medium"},model:{value:t.postOptions[s.name],callback:function(e){t.$set(t.postOptions,s.name,e)},expression:"postOptions[postType.name]"}},[t._v(" "+t._s(s.label)+" ")]),"all"!==s.name&&t.postOptions.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(s.label)+" ")]):t._e()],1)}))],2)],1),e("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.canExport,loading:t.loading},on:{click:t.processExportSettings}},[t._v(" "+t._s(t.strings.exportSettings)+" ")])],1)},i=[],a=e("5530"),n=(e("159b"),e("b64b"),e("4de4"),e("b0c0"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("2f62")),l={data:function(){return{options:{},postOptions:{},loading:!1,strings:{exportSettings:this.$t.__("Export Settings",this.$td),allSettings:this.$t.__("Export All Settings",this.$td),allPostTypes:this.$t.__("Export All Post Types",this.$td)}}},computed:{settings:function(){var t=[{value:"webmasterTools",label:this.$t.__("Webmaster Tools",this.$td)},{value:"rssContent",label:this.$t.__("RSS Content",this.$td)},{value:"advanced",label:this.$t.__("Advanced",this.$td)},{value:"searchAppearance",label:this.$t.__("Search Appearance",this.$td)},{value:"socialNetworks",label:this.$t.__("Social Networks",this.$td)},{value:"sitemap",label:this.$t.__("Sitemaps",this.$td)},{value:"redirects",label:this.$t.__("Redirects",this.$td)},{value:"breadcrumbs",label:this.$t.__("Breadcrumbs",this.$td)},{value:"tools",label:this.$t.__("Tools",this.$td)}];return this.$isPro&&t.push({value:"accessControl",label:this.$t.__("Access Control",this.$td)}),!this.isUnlicensed&&this.showImageSeoReset&&t.push({value:"image",label:this.$t.__("Image SEO",this.$td)}),!this.isUnlicensed&&this.showLocalBusinessReset&&t.push({value:"localBusiness",label:this.$t.__("Local Business SEO",this.$td)}),t},canExport:function(){var t=this,s=[];return Object.keys(this.options).forEach((function(e){s.push(t.options[e])})),Object.keys(this.postOptions).forEach((function(e){s.push(t.postOptions[e])})),s.some((function(t){return t}))}},methods:Object(a["a"])(Object(a["a"])({},Object(n["b"])(["exportSettings"])),{},{processExportSettings:function(){var t=this,s=[];this.options.all?(this.$isPro&&s.push("general"),s.push("internal"),this.settings.filter((function(t){return"all"!==t.value})).forEach((function(t){s.push(t.value)}))):Object.keys(this.options).forEach((function(e){t.options[e]&&s.push(e)}));var e=[];this.postOptions.all?this.$aioseo.postData.postTypes.forEach((function(t){e.push(t.name)})):Object.keys(this.postOptions).forEach((function(s){t.postOptions[s]&&e.push(s)})),this.loading=!0,this.exportSettings({settings:s,postOptions:e}).then((function(s){t.loading=!1,t.options={},t.postOptions={};var e=new Blob([JSON.stringify(s.body.settings)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(e),o.download="aioseo-export-settings-".concat(t.$moment().format("YYYY-MM-DD"),".json"),o.click(),URL.revokeObjectURL(o.href)}))}})},r=l,p=(e("b395d"),e("2877")),c=Object(p["a"])(r,o,i,!1,null,null,null);s["default"]=c.exports},b395d:function(t,s,e){"use strict";e("d68e")},d68e:function(t,s,e){}}]);
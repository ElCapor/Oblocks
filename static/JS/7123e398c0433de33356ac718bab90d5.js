;// bundle: Pages___Catalog___e96dd71d6a5f94fbf96186bed8a8af18_m
;// files: modules/Pages/Catalog.js

;// modules/Pages/Catalog.js
Roblox.define("Pages.Catalog",["Widgets.ItemImage","jQuery","Widgets.HierarchicalDropdown"],function(n,t,i){function a(i,e){n.populate(),r=i,r.TotalNumberOfPages=e,r.EmptyStringSearchEnabled=t("#catalog").data("empty-search-enabled"),y(),t(".Paging_Input").keypress(function(n){n.which=="13"&&l()}),t("#keywordTextbox").keypress(function(n){if(n.which=="13")return o(),!1}),t("#creatorTextbox").keypress(function(n){if(n.which=="13")return h(),!1}),t(".pxInput").keypress(function(n){if(n.which=="13")return c(),!1}),t("select#categoriesForKeyword").change(function(){r.EmptyStringSearchEnabled&&o()});var a=t("#legendcontent").css("display")!="none";t("#legendheader").click(function(){a?(t("#legendcontent").hide(),t(this).removeClass("expanded")):(t("#legendcontent").show(),t(this).addClass("expanded")),a=!a}),t(".assetTypeFilter").click(function(){var i=t(this).data("category"),e=t(this).data("keepfilters"),n;return i!==undefined&&(e!==undefined?f({types:!0,category:!0}):s(),r.Category=i),n=t(this).data("types"),n!==undefined&&(r.Subcategory=n),u(!1),!1}),t(".gearFilter").click(function(){var n=t(this).data("types"),i=t(this).data("category");i!==undefined?(s(),r.Category=i,n!="All"&&(r.Gears=n)):r.Gears=n=="All"?null:n,u(!1)}),t(".genreFilter").click(function(){return r.Genres=t("input.genreFilter:checked").map(function(){return t(this).data("genreid")}).get().toString().split(","),r.Genres==""&&(r.Genres=null),u(!1),!0}),t(".creatorFilter").click(function(){var n=t(this).data("creatorid");r.CreatorID=n,u(!1)}),t(".breadCrumbFilter").click(function(){var n=t(this).data("filter");switch(n){case"category":f({types:!0,gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0});break;case"subcategory":f({gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0});break;case"gears":f({genres:!0,creator:!0,prices:!0,keyword:!0});break;case"genres":f({creator:!0,prices:!0,keyword:!0});break;case"creator":f({prices:!0,keyword:!0});break;case"px":f({keyword:!0})}u(!1)}),t(".priceFilter").click(function(){r.CurrencyType=t(this).data("currencytype"),u(!1)}),t("#submitCreatorButton").click(h),t("#creatorTextbox").focus(function(){t(this).val()=="Name"&&t(this).val(""),t(this).removeClass("Watermark")}),t("#creatorTextbox").blur(function(){t(this).val()==""&&(t(this).val("Name"),t(this).addClass("Watermark"))}),t(".pxInput").focus(function(){(t(this).val()=="Min"||t(this).val()=="Max")&&t(this).val(""),t(this).removeClass("Watermark")}),t(".pxInput").blur(function(){var n=t(this).data("watermarktext");t(this).val()==""&&(t(this).val(n),t(this).addClass("Watermark"))}),t("#submitPxButton").click(c),t("a#submitSearchButton").click(o),t("select#SortMain").change(function(){r.SortType=document.getElementById("SortMain").value,u(!1)}),t("select#SortAggregation").change(function(){r.SortAggregation=document.getElementById("SortAggregation").value,r.SortCurrency=null,u(!1)}),t("select#SortCurrency").change(function(){r.SortCurrency=document.getElementById("SortCurrency").value,r.SortAggregation=null,u(!1)}),t("#includeNotForSaleCheckbox").change(function(){r.IncludeNotForSale=t(this).prop("checked"),u(!1)}),t("#pagingprevious").click(function(){t(this).hasClass("disabled")||(r.PageNumber--,r.PageNumber>=1&&u(!0))}),t("#pagingnext").click(function(){t(this).hasClass("disabled")||(r.PageNumber++,u(!0))})}function h(){e=document.getElementById("creatorTextbox").value,e!=""&&(r.CreatorID=null,u(!1))}function c(){r.CurrencyType=t("#submitPxButton").data("currencytype");var i=document.getElementById("pxMinInput").value,n=document.getElementById("pxMaxInput").value;i!=""&&parseInt(i)>0&&(r.PxMin=i),n!=""&&n!="0"&&(r.PxMax=n),u(!1)}function o(){if(r.Keyword=encodeURIComponent(document.getElementById("keywordTextbox").value),r.Keyword==""&&!r.EmptyStringSearchEnabled)return!1;var n=t("#categoriesForKeyword").val();return n=="Custom"?f({genres:!0,creator:!0,prices:!0,sorts:!0}):(f({category:!0,types:!0,gears:!0,genres:!0,creator:!0,prices:!0}),r.Category=n),u(!1),!1}function v(){f({genres:!0}),u(!1)}function s(){f({category:!0,types:!0,gears:!0,genres:!0,creator:!0,prices:!0,keyword:!0})}function f(n){n.category&&(r.Category=""),n.types&&(r.Subcategory=""),n.gears&&(r.Gears=null),n.genres&&(r.Genres=null),n.creator&&(r.CreatorID=null),n.prices&&(r.CurrencyType=null,r.PxMin=null,r.PxMax=null,r.IncludeNotForSale=null),n.keyword&&(r.Keyword=null),n.sorts&&(r.SortType=null,r.SortAggregation=null,r.SortCurrency=null)}function y(){r.PageNumber==1?t("#pagingprevious").addClass("disabled"):r.PageNumber==r.TotalNumberOfPages&&t("#pagingnext").addClass("disabled")}function l(){r.PageNumber=Math.round(t("input.Paging_Input").val()),r.PageNumber>=1&&(r.PageNumber>r.TotalNumberOfPages&&(r.PageNumber=r.TotalNumberOfPages),u(!0))}function u(n){var i="/catalog/browse.aspx?",f,o=!1,u;if(Roblox.CatalogValues&&(Roblox.CatalogValues.CatalogContentsUrl&&Roblox.CatalogValues.ContainerID&&(f=t("#"+Roblox.CatalogValues.ContainerID),f.length!==0&&(i=Roblox.CatalogValues.CatalogContentsUrl+"?",o=!0)),Roblox.CatalogValues.CatalogContext!==undefined&&(i+="CatalogContext="+Roblox.CatalogValues.CatalogContext+"&")),r.Subcategory!=null&&r.Subcategory!=""&&(i+="Subcategory="+r.Subcategory+"&"),r.Gears!=null&&(i+="Gears="+r.Gears+"&"),r.Genres!=null)for(u=0;u<r.Genres.length;u++)i+="Genres="+r.Genres[u]+"&";r.CreatorID!=null&&r.CreatorID!=0?i+="CreatorID="+r.CreatorID+"&":e!=null&&(i+="CreatorName="+e+"&"),r.Keyword!=null&&(i+="Keyword="+r.Keyword+"&"),r.CurrencyType!=null&&(i+="CurrencyType="+r.CurrencyType+"&"),r.PxMin!=null&&(i+="pxMin="+r.PxMin+"&"),r.PxMax!=null&&(i+="pxMax="+r.PxMax+"&"),r.SortType!=null&&(i+="SortType="+r.SortType+"&"),r.SortAggregation!=null&&(i+="SortAggregation="+r.SortAggregation+"&"),r.SortCurrency!=null&&(i+="SortCurrency="+r.SortCurrency+"&"),n&&r.PageNumber>=0&&(i+="PageNumber="+r.PageNumber+"&"),r.IncludeNotForSale!=null&&t("#includeNotForSaleCheckbox").length!=0&&(i+="IncludeNotForSale="+r.IncludeNotForSale+"&"),i+="LegendExpanded="+(t("#legendcontent").css("display")!="none").toString()+"&",i+="Category="+r.Category,o?Roblox.CatalogShared.LoadCatalogAjax(i,null,f):window.location=i}var r,e;return{ClearGenres:v,pagestate:r,init:a,initDropdown:i.InitializeDropdown}});

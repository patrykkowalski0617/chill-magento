// const getFromStoreEndOfListing = ({ module }) => {
//   const moduleId = module.dataset.moduleId;
//   const gidsInput = module.querySelector(`#products_products_${moduleId}`);
//   const actualGids = gidsInput.value;
//   let arrayOnlyInStore = [];

//   let flattenedShop = [];

//   let count = 0;

//   const getAllProducts = () => {
//     fetch(
//       `https://www.neonet.pl/graphql?query=query landingPageProducts($moduleId: Int!, $attributes: [String], $sortBy: String, $sortOrder: String) { products: msProducts(filter: {lp_module_id: $moduleId, attributes: $attributes}, facet: true, sort: {sort_by: $sortBy, sort_order: $sortOrder}) { items_ids total_count facets { code values { value_id count } } stats { code values { min max count } } }
//         }
//         &variables={"moduleId":${moduleId},"attributes":[],"sortBy":null,"sortOrder":null}&v=2.167.0`
//     )
//       .then((response) => response.json())
//       .then(({ data }) => {
//         console.log(data);
//         const limit = Math.round(data.products.items_ids.length / 100);
//         const interval = setInterval(() => {
//           if (count > limit) {
//             clearInterval(interval);
//             flattenedShop = arrayOnlyInStore.flat(1);
//             console.log(flattenedShop, `: flattened only in shop`);
//             updateTextArea(flattenedShop);
//           } else {
//             fetch(
//               `https://www.neonet.pl/graphql?query= query msProducts( $ids: [Int] ) { products: msProducts( filter: { skus: $ids } attributes: true ) { items { id,name,price,final_price,omnibus_price,request_path,main_category,thumbnail,images_gallery,availability,available_only_in_store,available_in_store,energy_class,euro_energy_class,variants,attributes { value attribute_code },availability_status_element,review_count,review_summary,autopromotionLP: autopromotion(lp_promotion:true){rule_id,promo_code,discount,discount_type,show_in_listing,show_on_product,date_to,show_on_homepage,show_qty_sold,show_qty_not_sold,show_time_to_end,shock_header,price,date_from,stock_used,stock_left,custom_shockprice_header,promo_code,is_hidden,is_shockprice},neonet_product_id,manufacturer,sku,labels,brand_plan,industry,category_id,path_to_category,fo neonet_product_id is_sales_blocked } } }
//           &variables={"ids":[${data.products.items_ids}]}&v=2.167.0`
//             )
//               .then((response) => response.json())
//               .then((prods) => {
//                 const products = prods.data.products.items;
//                 products.forEach((element) => {
//                   console.log(element);
//                   if (element.available_only_in_store === 1) {
//                     arrayOnlyInStore.push(element.neonet_product_id);
//                   }
//                 });
//                 data.products.items_ids.splice(0, 100);
//               });
//             count++;
//           }
//         }, 1000);
//       });
//   };

//   const updateTextArea = (gidsOnlyInStoreArray) => {
//     const makeObjectofTextArea = (oldGids) => {
//       const listArr = oldGids
//         .replace(/\s/g, ";")
//         .split(";")
//         .filter((el) => el.length);
//       const listArrOfObj = listArr.map((el) => {
//         const _el = el.split(",");
//         return {
//           gid: _el[0],
//           proc: _el[1],
//           disc: _el[2],
//           price: _el[3],
//           lp: _el[4],
//           code: _el[5],
//           min: _el[6],
//         };
//       });
//       return listArrOfObj;
//     };

//     const makeObjectOfArray = (newGids) => {
//       const listArrOfObj = newGids.map((el) => {
//         const _el = el.split(",");
//         return {
//           gid: _el[0] ? _el[0] : "",
//           proc: _el[1] ? _el[1] : "",
//           disc: _el[2] ? _el[2] : "",
//           price: _el[3] ? _el[3] : "",
//           lp: _el[4] ? _el[4] : "",
//           code: _el[5] ? _el[5] : "",
//           min: _el[6] ? _el[6] : "",
//         };
//       });
//       return listArrOfObj;
//     };

//     const oldGidsObj = makeObjectofTextArea(actualGids);
//     const gidsOnlyInStoreObject = makeObjectOfArray(gidsOnlyInStoreArray);
//     const gidsOnline = oldGidsObj.map((e) => e);

//     gidsOnlyInStoreObject.forEach((elementInStore) => {
//       gidsOnline.forEach((mainArrayElement, mainArrayIndex) => {
//         if (elementInStore.gid === mainArrayElement.gid) {
//           gidsOnline.splice(mainArrayIndex, 1);
//         }
//       });
//     });

//     console.log(gidsOnline, `: gids online`);

//     const newListArrOfObj = oldGidsObj.map((el, i) => {
//       const newInStoreObj = gidsOnlyInStoreObject.find(
//         (_el) => el.gid === _el.gid
//       );

//       const newGidsOnline = gidsOnline.find((_el) => el.gid === _el.gid);

//       if (newInStoreObj) {
//         const { gid, proc, disc, price, code, min } = newInStoreObj;
//         return {
//           gid: gid !== "" ? gid : el.gid,
//           proc: proc !== "" ? proc : el.proc,
//           disc: disc !== "" ? disc : el.disc,
//           price: price !== "" ? price : el.price,
//           lp: "-1",
//           code: code !== "" ? code : el.code,
//           min: min !== "" ? min : el.min,
//         };
//       } else if (newGidsOnline) {
//         const { gid, proc, disc, price, lp, code, min } = newGidsOnline;
//         return {
//           gid: gid !== "" ? gid : el.gid,
//           proc: proc !== "" ? proc : el.proc,
//           disc: disc !== "" ? disc : el.disc,
//           price: price !== "" ? price : el.price,
//           lp: lp === "0" || lp === "-1" ? "1" : el.lp,
//           code: code !== "" ? code : el.code,
//           min: min !== "" ? min : el.min,
//         };
//       } else {
//         return el;
//       }
//     });

//     const newList = newListArrOfObj
//       .map((el) => {
//         const { gid, proc, disc, price, lp, code, min } = el;
//         return [gid, proc, disc, price, lp, code, min].join(",");
//       })
//       .join(";");

//     setTimeout(() => {
//       gidsInput.value = newList;
//     }, 100);
//   };

//   getAllProducts();
// };

// export default getFromStoreEndOfListing;

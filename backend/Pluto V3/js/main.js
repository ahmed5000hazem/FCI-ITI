"use strict";

const middleContent = document.querySelector(".midde_cont");

function controllerHandler() {
  const href = window.location.hash.slice(1);
  console.log(href);

  switch (href) {
    case "dashboard":
      dashboardView();
      break;
    case "all-products":
      allProductsView();
      break;
    case "add-product":
      addProductView();
      break;
    default:
      redirectHandler();
      break;
  }
}

window.addEventListener("load", () => {
  location.replace("#dashboard");
  dashboardView();
});
window.addEventListener("hashchange", controllerHandler);

function redirectHandler() {
  let href = window.location.hash.slice(1);
  href = href.split("/");

  const type = href[0];
  const id = href[1];

  if (type === "update") updateProductView(id);
  if (type === "delete") deleteProduct(id);
}

// Views
function dashboardView() {
  // welcome Back
  const markup = `
  <div class="container-fluid">
          <div class="row column_title">
            <div class="col-md-12">
              <div class="page_title">
                <h2>Dashboard</h2>
              </div>
            </div>
          </div>
  <!-- Members Counter  -->
  <div class="row column1">
    <div class="col-md-6 col-lg-3">
      <div class="full counter_section margin_bottom_30">
        <div class="couter_icon">
          <div>
            <i class="fa fa-user yellow_color"></i>
          </div>
        </div>
        <div class="counter_no">
          <div>
            <p class="total_no">100</p>
            <p class="head_couter">Doctors</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="full counter_section margin_bottom_30">
        <div class="couter_icon">
          <div>
            <i class="fa fa-clock-o blue1_color"></i>
          </div>
        </div>
        <div class="counter_no">
          <div>
            <p class="total_no">24 h</p>
            <p class="head_couter">Avilable Time</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="full counter_section margin_bottom_30">
        <div class="couter_icon">
          <div>
            <i class="fa fa-cloud-download green_color"></i>
          </div>
        </div>
        <div class="counter_no">
          <div>
            <p class="total_no">More One Branch</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="full counter_section margin_bottom_30">
        <div class="couter_icon">
          <div>
            <i class="fa fa-comments-o red_color"></i>
          </div>
        </div>
        <div class="counter_no">
          <div>
            <p class="total_no">54</p>
            <p class="head_couter">Comments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Media  -->
  <div class="row" style="background-color: #fff; padding: 30px 0;">
    <div class="col-md-6">
      <img src="images/about-1.jpg" alt="logo">
    </div>
    <div class="col-md-6 team-text"
      style="display: flex; flex-direction: column ; justify-content: center; align-items: center;">
      <h2 style="font-size: 60px; color: #ff5722;">OPTCARE CLINIC</h2>
      <h3 class="my-5">Eye Care</h3>
    </div>
  </div>
</div>
  `;
  middleContent.innerHTML = "";
  middleContent.insertAdjacentHTML("afterbegin", markup);
}
// All Products
let allProducts = [];
async function allProductsView() {
  try {
    console.log("allProductsView");
    const res = await fetch("http://localhost:4000/all-products");
    console.log(res);
    const data = await res.json();

    console.log(data);
    allProducts = data;

    const markup = `
    <div class="container-fluid">
    <div class="row column_title">
    <div class="col-md-12">
      <div class="page_title">
        <h2>Dashboard</h2>

      </div>
    </div>
  </div>
    <!-- row -->
    <div class="row column1">
      <div class="col-md-12">
        <div class="white_shd full margin_bottom_30">
          <div class="full graph_head">
            <div class="heading1 margin_0" style="    display: flex;
            justify-content: space-between;
            width: 100%;">
              <h2>All Branches</h2>
              <button
              onClick="deleteAllProducts()"
              style="
              padding: 10px;
              margin-bottom: 12px;
              display: inline-block;"
              class="btn btn-danger btn-xs" >
              Delete All Products 
            </button>
            </div>
          </div>
          <div class="full price_table padding_infor_info">
            <div class="row">
              <!-- column contact -->
              ${allProducts
                .map((product) => {
                  return `
              <div
                
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 profile_details margin_bottom_30"
              >
                <div class="contact_blog" style="padding: 0;">
                  <div class="contact_inner" >
                    <div class="">
                      <div class="profile_contacts">
                        <img
                          style="width: 100%; height: 200px;  border-radius: 10px"
                          class="img-responsive"
                          src="${product.image}"
                          alt="#"
                        />
                      </div>
                    </div>
                    <div
                      class="left"
                      style="width: 100%; padding: 20px"
                    >
                      <h3>${product.title}</h3>
                      <h2>$${product.price}</h2>
                    </div>

                    <div class="bottom_list">
                      <div class="">
                        <a 
                          style="
                          padding: 10px;
                          margin-bottom: 12px;
                          display: inline-block;"
                          class="btn btn-primary btn-xs" href="#update/${product._id}">   <i class="fa fa-home"> </i> 
                          Update
                        </a>
                        <a 
                          style="
                          padding: 10px;
                          margin-bottom: 12px;
                          display: inline-block;"
                          class="btn btn-danger btn-xs" href="#delete/${product._id}">   <i class="fa fa-home"> </i> 
                          Delete
                        </a>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `;
                })
                .join("")}

              <!-- end column contact blog -->
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
    `;

    middleContent.innerHTML = "";
    middleContent.insertAdjacentHTML("afterbegin", markup);
  } catch (error) {
    alert(error);
  }
}

// ADD
// action="http://localhost:4000/insert" method='POST'
async function addProductView() {
  try {
    const markup = `
    <div class="container-fluid">
    <div class="col-sm-12 my-5">
      <h3 class="text-center my-2">Add Product</h3>
      <form class="form" action='' method='GET' >
        <div class="d-flex justify-content-between">
          <div class="form-group w-50">
            <label>Product Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="name"
              name="title"
              id="add-product-name"
            />
          </div>
          <div class="form-group w-50 ml-3">
            <label>Price</label>
            <input
              
              value=""
              type="text"
              class="form-control"
              placeholder="Degree"
              name="price"
              id="add-product-price"
            />
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="form-group w-50">
            <label>Image URL</label>
            <input
              type="text"
              class="form-control"
              name="image"
              id="add-product-image"
            />
          </div>
          <div class="form-group w-50 ml-3">
            <label>Category </label>

            <select
              id="add-product-category"
              name="category"
              class="form-control"
            >
              <option value="men">men</option>
              <option value="women">women</option>
            </select>
          </div>
        </div>

        <div class="form-group w-50">
          <label>Product Description </label>
          <br>
          <textarea
          name="description"
            id="add-product-description"
            class="description"
            placeholder="Description"
          ></textarea>
        </div>
        <button
        onClick="addProductHandler(event)"
        type="submit" 
          name="add"
          class="btn"
        >
          Add Product
        </button>
      </form>
    </div>
    <div class="container" id="add-product-message">
      <h2></h2>
    </div>
  </div>
    `;

    // onClick="addBranchHandler(event)"
    middleContent.innerHTML = "";
    middleContent.insertAdjacentHTML("afterbegin", markup);
  } catch (error) {
    alert(error);
  }
}

async function addProductHandler(event) {
  event.preventDefault();
  const name = document.getElementById("add-product-name");
  const price = document.getElementById("add-product-price");
  const image = document.getElementById("add-product-image");
  const category = document.getElementById("add-product-category");
  const description = document.getElementById("add-product-description");
  console.log(
    name.value,
    price.value,
    image.value,
    category.value,
    description.value
  );

  try {
    const res = await fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name.value,
        price: +price.value,
        image: image.value,
        category: category.value,
        description: description.value,
      }),
    });

    console.log(res);

    if (res.ok) {
      document.querySelector("#add-product-message h2").textContent =
        "Product Added Successfully";
      setTimeout(() => {
        document.querySelector("#add-product-message h2").textContent = "";
        setTimeout(() => {
          // location.href = `#all-products`;
          name.value = "";
          price.value = "";
          image.value = "";
          category.value = "";
          description.value = "";
        }, 0);
      }, 2000);
    }
  } catch (error) {}
}

// Delete
async function deleteProduct(id) {
  console.log("deleteProduct");

  try {
    const res = await fetch("http://localhost:4000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    console.log(res);
    location.href = `#all-products`;

    if (res.ok) {
      return;
      location.href = `#test`;
      location.href = `#branch`;
    }
  } catch (error) {}
}

// Delete All
async function deleteAllProducts() {
  console.log("deleteAllProducts");

  const sure = window.confirm("Are You Sure To Delete All Products ");
  console.log(sure);

  if (!sure) return;

  try {
    const res = await fetch("http://localhost:4000/delete-all");
    console.log(res);
    location.href = `#all-products`;
  } catch (error) {
    console.log(error);
  }
}
// Update
let updatedProductId;
async function updateProductView(id) {
  console.log("updateProductView");
  const href = window.location.hash.slice(1);

  const product = allProducts.find((product) => product._id === id);
  console.log("updateBranchView", product);

  updatedProductId = product._id;
  console.log(updatedProductId);
  // location.href = `#update-product`;
  try {
    const markup = `
      <div class="container-fluid">
      <div class="col-sm-12 my-5">
        <h3 class="text-center my-2">Add Product</h3>
        <form class="form" action="" method=''>
          <div class="d-flex justify-content-between">
            <div class="form-group w-50">
              <label>Product Name</label>
              <input
                value="${product.title}"
                type="text"
                class="form-control"
                placeholder="name"
                name="title"
                id="update-product-name"
              />
            </div>
            <div class="form-group w-50 ml-3">
              <label>Price</label>
              <input

              value="${product.price}"
                type="text"
                class="form-control"
                placeholder="Degree"
                name="price"
                id="update-product-price"
              />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <div class="form-group w-50">
              <label>Image URL</label>
              <input
              value="${product.image}"
                type="text"
                class="form-control"
                name="image"
                id="update-product-image"
              />
            </div>
            <div class="form-group w-50 ml-3">
              <label>Category </label>

              <select
                id="update-product-category"
                name="category"
                class="form-control"
              >
                <option ${
                  product.category == "men's clothing" ? "selected" : " "
                } 
                value="men's clothing">Men's clothing</option>
                <option ${
                  product.category == "electronics" ? "selected" : ""
                } value="electronics">Electronics</option>
              </select>
            </div>
          </div>

          <div class="form-group w-50">
            <label>Product Description </label>
            <br>
            <textarea
            
              name="description"
              id="update-product-description"
              class="description"
              placeholder="Description"
            >${product.description}</textarea>
          </div>
          <button
          onClick="updateProductHandler(event)"
          type="submit"
            name="add"
            class="btn"
          >
            Update Product
          </button>
        </form>
      </div>
      <div class="container" id="update-product-message">
        <h2></h2>
      </div>
    </div>
      `;

    middleContent.innerHTML = "";
    middleContent.insertAdjacentHTML("afterbegin", markup);
  } catch (error) {
    alert(error);
  }
}

async function updateProductHandler(event) {
  event.preventDefault();
  const name = document.getElementById("update-product-name");
  const price = document.getElementById("update-product-price");
  const image = document.getElementById("update-product-image");
  const category = document.getElementById("update-product-category");
  const description = document.getElementById("update-product-description");

  console.log(
    name.value,
    price.value,
    image.value,
    category.value,
    description.value,
    updatedProductId
  );

  try {
    const res = await fetch("http://localhost:4000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name.value,
        price: +price.value,
        image: image.value,
        category: category.value,
        description: description.value,
        id: updatedProductId,
      }),
    });

    console.log(res);

    if (res.ok) {
      document.querySelector("#update-product-message h2").textContent =
        "Product Updated Successfully";
      setTimeout(() => {
        document.querySelector("#update-product-message h2").textContent = "";
        setTimeout(() => {
          location.href = `#all-products`;
        }, 0);
      }, 2000);
    }
  } catch (error) {}
}

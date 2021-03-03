# DOM & Function
## 1.Function
## 2.Callback
## 3.DOM(Document Object Model)

### DOM
* DOM.
     * Thay  đổi class (Thêm & Xóa)
     * Thay đổi attribute (Sửa)
     * Thêm mới một attribute cho một phần tử.
     * Bắt được sự kiện click chuột của ng dùng.
     * Thêm một phần tử gắn vào trong cấu trúc HTML.
     * ....
     --> Làm hiệu ứng động
* Phải xác định được mình áp dụng công việc trên cho phần tử nào
     1. Học cách truy xuất phần tử bằng JS
         - Truy xuất bằng id của phần tử.->`HTMLElement` -> 1 phần tử
         - Truy xuất bằng class của phần tử. ->`HTMLCollectionOf`-> nhiều phần tử.
           - Lưu ý HTMLCollectionOf ko phải là Array. Nó chỉ gần giống với dạng Array có length. có thể truy cập vào phần tử bằng index.
         - Truy suất bằng tên thẻ a, body,...
         - Truy xuất bằng selector của CSS.  
* Thao tác với DOM (**RUECD**)
 * Read: (3 cách)
      - Id:
      - Class:
      - Thẻ:
 * Update:
      - `d.textContent="Hi There";`
 * Event:
      - ```js
         const d = document.getElementById("msg");
            d.addEventListener('click|....', () =>{
            d.textContent="Hi There";
        ``` 
 * Create:
      - ` insertAdjacentHTML(position, text) `
      - ```js
           const d = document.getElementById("msg");
            d.insertAdjacentHTML('afterbegin', `<div> Cool </div>`)
        ```
 * Delete:
      - `remove()`
            

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Pencil, Trash, Eye } from "lucide-react";
import { useGetProductsQuery } from "../../Slices/productSlice.ts";
import Modal from "../../components/Modal";
const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: products, error, isLoading } = useGetProductsQuery();

  const handleModalChange = (product: any) => {
    console.log("products", product);
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <div className=" overflow-hidden m-8 ">
      <div className="container min-h-screen bg-white rounded-lg relative">
        <div className="flex justify-between px-3 items-center">
          <div className="text-black text-xl capitalize font-medium py-4">
            All product List
          </div>

          <div className="flex  space-x-4">
            {/* add product button */}
            <button className="px-3  py-1 bg-[#FF851B] capitalize rounded-xl text-white text-sm">
              add product
            </button>
            {/* end of add product button */}
            <div className="relative ">
              <div
                className=" bg-gray-200 text-black px-2 py-1 rounded-xl  flex  capitalize text-sm items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                this month
                <span className="">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {isOpen && (
                <ul className="absolute right-0 p-3 top-full w-[12rem] border bg-white shadow-2xl z-40  capitalize rounded-md text-gray-600 font-medium">
                  <li className="hover:bg-gray-200 hover:p-1 cursor-pointer  ">
                    download
                  </li>
                  <li className="hover:bg-gray-200 hover:p-1 cursor-pointer">
                    export{" "}
                  </li>
                  <li className="hover:bg-gray-200 hover:p-1 cursor-pointer ">
                    import{" "}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead className="border-t border-b text-gray-600 bg-[rgba(234,237,241,.4)] capitalize w-full">
            <tr>
              <th className="p-3 text-left font-medium text-gray-700">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="p-3 text-left ">product name &size</th>
              <th className="p-3 text-left font-medium text-gray-700">price</th>
              <th className="p-3 text-left font-medium text-gray-700">
                category
              </th>
              <th className="p-3 text-left font-medium text-gray-700">stock</th>
              <th className="p-3 text-left font-medium text-gray-700">
                rating
              </th>
              <th className="p-3 text-left font-medium text-gray-700 ">
                action
              </th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((productItem) => (
              <tr key={productItem.id} className="border-b text-gray-600 ">
                <td className="p-3">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="p-3 flex items-center space-x-2">
                  <div className=" w-14 h-14 border bg-gray-200 p-2 rounded-md">
                    <img
                      src={productItem.imageUrl}
                      alt={productItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-md  capitalize font-medium">
                      {productItem.name}
                    </div>
                    <div>
                      Size:
                      <span className="uppercase text-xs">
                        {" "}
                        {productItem.variant}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="p-3">${productItem.price}</td>
                <td className="p-3">{productItem.category?.name}</td>
                <td className="p-3">{productItem.stock}</td>
                <td className="p-3">reviews</td>
                <td
                  className="p-3"
                  onClick={() => handleModalChange(productItem)}
                >
                  <Eye />
                </td>

                <td className="p-3 ">
                  <div className="flex space-x-4">
                    <button className=" rounded-lg p-2 bg-orange-200 hover:bg-[#FF851B] ">
                      <Pencil className="size-4  " />
                    </button>
                    <button className=" rounded-lg p-2 bg-red-400 hover:bg-red-600 ">
                      <Trash className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isOpenModal && (
          <Modal
            open={isOpenModal}
            setOpen={setIsOpenModal}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;

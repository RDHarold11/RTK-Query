import React, { useState } from "react";
import { useCreateShopItemsMutation } from "../features/shopItems/apiSlice";
import { useNavigate } from "react-router";

const AddItem = () => {
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [img, setImg] = useState()
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const [createItem] = useCreateShopItemsMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    createItem({description, price, img, category})
    navigate("/")
  }

  return (
    <section className="w-full h-[90vh] flex items-center justify-center mx-auto">
      <div className="w-[500px] form">
        <form className="px-3 py-4" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="number"
              className="block w-full border-b-2 px-2 py-2"
              placeholder="00"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              className="block w-full border-b-2 px-2 py-2"
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              className="block w-full border-b-2 px-2 py-2"
              placeholder="img src"
              onChange={(e) => setImg(e.target.value)}
            />
            <textarea
              placeholder="description"
              className="w-full py-2 px-2"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className="bg-[#FF6969] px-4 text-white rounded-sm py-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItem;

import React from "react";
import "./Info.css";

const Info = ({ setShowModal }) => {
  return (
    <div className="modal-info">
      <div className="bg-[#f0f8ff] px-16 py-8">
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-base uppercase mb-3" for="">
                Name
              </label>
              <input
                type="text"
                className="border-none focus:outline-none w-full p-3"
                placeholder="Name"
                name="name"
                required=""
              />
            </div>

            <div className="">
              <label className="block text-base uppercase mb-3" for="">
                No. of Person
              </label>
              <input
                className="border-none focus:outline-none w-full p-3"
                type="text"
                placeholder="Adult + Child"
                name="NOP"
                required=""
              />
            </div>
            <div className="">
              <label className="block text-base uppercase mb-3" for="">
                Phone Number
              </label>
              <input
                className="border-none focus:outline-none w-full p-3"
                type="number"
                placeholder="Phone"
                name="phone"
                required=""
              />
            </div>
            <div className="">
              <label className="block text-base uppercase mb-3" for="">
                Date for Trip
              </label>
              <input
                className="border-none focus:outline-none w-full p-3"
                type="date"
                placeholder="Name"
                name="date"
                required=""
              />
            </div>
            <div className="">
              <label className="block text-base uppercase mb-3" for="">
                Package type
              </label>
              <select
                className="border-none focus:outline-none w-full p-3"
                id=""
                name="TOP"
              >
                <option value="">Pkg Type - </option>
                <option value="Honeymoon">Pkg Type - Honeymoon</option>
                <option value="Family">Pkg Type - Family</option>
                <option value="Group">Pkg Type - Group</option>
              </select>
            </div>
            <div className="">
              <label className="block text-base uppercase mb-3" for="">
                Number Of Days
              </label>
              <select className="border-none focus:outline-none p-3 w-full" name="NOD">
                <option value="No Decided">No Decided</option>
                <option value="03 Night - 04 Days">03 Night - 04 Days</option>
                <option value="04 Night - 05 Days">04 Night - 05 Days</option>
                <option value="05 Night - 06 Days">05 Night - 06 Days</option>
                <option value="06 Night - 07 Days">06 Night - 07 Days</option>
                <option value="More Than 07 Days">More Than 07 Days</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              className="border border-none focus:outline-none p-3 my-7 w-full"
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
              name="msg"
            ></textarea>
          </div>

          <div className="">
            <button
              className="btn btn-primary mb-7 w-full"
              name="contact_email"
            >
              Send Enquiry
            </button>
          </div>
        </form>
        <button
          onClick={() => setShowModal(false)}
          className="w-10 h-7 pb-2 flex justify-center items-center bg-[#777] rounded-sm text-white font-semibold absolute top-[6rem] right-[3rem] text-3xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import family from "../../assets/image/family.png";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWhatsapp, MdOutlineMail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section name='contact' id="contact">
      <div className="inner">
        <div className="">
          <p className="title">Contact</p>
          <p className="des">Get in touch with us</p>
        </div>
        <div className="flex flex-wrap w-full justify-center items-center mx-auto px-12 sm:px-32 md:px-32 lg:px-60">
          <div>
            <img className="max-w-[320px] m-12" src={family} alt="" />
          </div>
          <div className="">
            <form>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-base uppercase mb-3" for="">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border border-black w-full p-3"
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
                    className="border border-black w-full p-3"
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
                    className="border border-black w-full p-3"
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
                    className="border border-black w-full p-3"
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
                    className="border border-black w-full p-3"
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
                  <select className="border border-black p-3 w-full" name="NOD">
                    <option value="No Decided">No Decided</option>
                    <option value="03 Night - 04 Days">
                      03 Night - 04 Days
                    </option>
                    <option value="04 Night - 05 Days">
                      04 Night - 05 Days
                    </option>
                    <option value="05 Night - 06 Days">
                      05 Night - 06 Days
                    </option>
                    <option value="06 Night - 07 Days">
                      06 Night - 07 Days
                    </option>
                    <option value="More Than 07 Days">More Than 07 Days</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  className="border border-black p-3 my-7 w-full"
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
          </div>
        </div>

        <div className="flex flex-wrap gap-20 my-28 mx-auto justify-center items-center px-12 sm:px-32 md:px-32">
          <div className="px-3">
            <table >
              <tbody>
                <tr>
                  <td>
                    <FaPhoneAlt className="icon" />
                  </td>
                  <td>9476063111</td>
                </tr>
                <tr>
                  <td>
                    <MdWhatsapp className="icon"  />
                  </td>
                  <td>9476063111</td>
                </tr>
                <tr>
                  <td>
                    <MdOutlineMail className="icon"  />
                  </td>
                  <td
                    style={{
                      textTransform: "lowercase",
                      wordBreak: "break-all",
                    }}
                  >
                    contact@andamanictravelopedia.com <br />
                    andamanictravelopedia @gmail.com
                  </td>
                </tr>
                <tr>
                  <td>
                    <MdLocationOn className="icon"  />
                  </td>
                  <td>
                    Andamanic Travelopedia <br />
                    Port Blair, South Andaman,
                    <br />
                    Andaman &amp; Nicobar Islands
                    <br />
                    Pin Code - 744 107
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.644345517758!2d92.7120363737891!3d11.719583041092111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088bf09dbb073c3%3A0xa3cc61f2515f5d94!2sALNIYMA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1686141011252!5m2!1sen!2sin"
              width="550"
              height="350"
              className="rounded-md p-1 shadow-xl shadow-gray-400 map-responsive"
              style={{ border: "0" , boxShadow: "9px 9px 1rem rgba(0, 0, 0, 0.3)"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

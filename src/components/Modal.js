import React, { useContext, useState, useEffect } from "react";
import Camera from "../assets/zondicons_camera.png";
import { partyName } from "./partyNames";
import ArrowDown from "../assets/Vector (5).png";
import CloseBtn from "../assets/Vector (6).png";
import { PartiesContext } from "../context/partiesContext";

const Modal = () => {
  const [selectedParty, setSelectedParty] = useState([]);
  const [showError, setShowError] = useState(false);

  const { setShowModal, data, setData } = useContext(PartiesContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [gst, setGst] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [pinError, setPinError] = useState("");
  const [gstError, setGstError] = useState("");
  const [panError, setPanError] = useState("");
  const [aadharError, setAadharError] = useState("");

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handleSelect = (event) => {
    const selectedPartyName = event.target.value;
    setSelectedParty((prevSelectedParty) => [
      ...prevSelectedParty,
      selectedPartyName,
    ]);
  };

  const handleRemoveParty = (name) => {
    setSelectedParty((prevSelectedParty) =>
      prevSelectedParty.filter((party) => party !== name)
    );
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handlePhone = (e) => {
    let value = e.target.value;
    if (value.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
    setPhone(value);
  };

  const handlePin = (e) => {
    let value = e.target.value;
    if (value.length !== 6) {
      setPinError("Please enter a valid 6-digit pin code");
    } else {
      setPinError("");
    }
    setPin(value);
  };

  const handleGst = (e) => {
    let value = e.target.value.trim();
    if (value.length !== 16) {
      setGstError("Please enter a valid 16-digit GSTIN");
    } else {
      setGstError("");
    }
    setGst(value);
  };

  const handlePan = (e) => {
    let value = e.target.value.trim();
    const panRegex = /^[A-Za-z][A-Za-z0-9]{9}$/;

    if (value.length !== 10 || !panRegex.test(value)) {
      setPanError("Please enter a valid 10-character PAN");
    } else {
      setPanError("");
    }
    setPan(value);
  };

  const handleAadhar = (e) => {
    let value = e.target.value;
    if (value.length !== 12) {
      setAadharError("Please enter a valid 12-digit Aadhar number");
    } else {
      setAadharError("");
    }
    setAadhar(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && address && city && pin && gst && pan && aadhar) {
      setData([
        ...data,
        {
          name,
          phone,
          address,
          city,
          pin,
          gst,
          pan,
          aadhar,
          groups: selectedParty,
        },
      ]);
      setName("");
      setPan("");
      setPhone("");
      setAadhar("");
      setCity("");
      setAddress("");
      setGst("");
      setPin("");
    } else {
      setShowError(true);
    }
  };
  const handleCancel = () => {
    setName("");
    setPan("");
    setPhone("");
    setAadhar("");
    setCity("");
    setAddress("");
    setGst("");
    setPin("");
    setSelectedParty([]);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="form__container">
        <div className="top__view">
          <div className="add__profile">
            <h3>Add Profile</h3>
            <img src={Camera} alt="camera" />
          </div>
          <button onClick={handleClose}>
            <img src={CloseBtn} alt="" />
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="party-groups">Party Groups*</label>
          <br />
          <div className="selected__row">
            <select
              name="party-groups"
              id="party-groups"
              onChange={handleSelect}
              value={
                selectedParty.length === 0
                  ? ""
                  : selectedParty[selectedParty.length - 1]
              }
            >
              <option value="" disabled hidden>
                Select Party Groups
              </option>
              {partyName.map((party, i) => (
                <option key={i} value={party}>
                  {party}
                </option>
              ))}
            </select>
            <img src={ArrowDown} alt="arrow down" className="arrow__down" />
            <div className="selected">
              {selectedParty.map((name, i) => (
                <span key={i}>
                  {name}
                  <img
                    src={CloseBtn}
                    alt="close button"
                    onClick={() => handleRemoveParty(name)}
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="name">
            <label htmlFor="name">Name*</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>
          <div className="name">
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter 10 digit number"
              value={phone}
              onChange={handlePhone}
            />
            {phoneError && <div className="error">{phoneError}</div>}
          </div>
          <div>
            <div className="name">
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter Address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="name">
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                placeholder="Enter City"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="name">
              <label htmlFor="pincode">Pincode</label>
              <br />
              <input
                type="number"
                placeholder="Enter Pincode"
                id="pincode"
                value={pin}
                onChange={handlePin}
              />
              {pinError && <div className="error">{pinError}</div>}
            </div>
          </div>
          <div>
            <div className="name">
              <label htmlFor="gst">GSTIN</label>
              <br />
              <input
                type="text"
                placeholder="Enter 16 digit GSTIN"
                id="gst"
                value={gst}
                onChange={handleGst}
              />
              {gstError && <div className="error">{gstError}</div>}
            </div>
            <div className="name">
              <label htmlFor="pan">PAN Number</label>
              <br />
              <input
                type="text"
                placeholder="Enter 10 PAN number"
                id="pan"
                value={pan}
                onChange={handlePan}
              />
              {panError && <div className="error">{panError}</div>}
            </div>
            <div className="name">
              <label htmlFor="aadhar">Aadhar</label>
              <br />
              <input
                type="number"
                placeholder="Enter 12 digit Aadhar"
                id="aadhar"
                value={aadhar}
                onChange={handleAadhar}
              />
              {aadharError && <div className="error">{aadharError}</div>}
            </div>
          </div>
          <div className="btn__wrapper">
            <button className="form_btn cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="form_btn save">
              Save
            </button>
          </div>
          {showError && (
            <div className="error">Please fill all required fields.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;

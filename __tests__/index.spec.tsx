import * as React from "react";
import { mount } from "enzyme";
import IndexPage from "../pages/index";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ({
    checkout: { selectedAvailability: "", paymentTypes: "", pending: "" }
  })
}));

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(<IndexPage />);
      expect(wrap.find("h1").text()).toBe("Hello World");
    });
  });
});

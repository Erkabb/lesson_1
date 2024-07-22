const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
        backgroundColor: "#333",
        gap: "40px",
      }}
    >
      <img
        src="https://i.pinimg.com/736x/1a/e8/c7/1ae8c78da90bbb3a66d0ae8a91deb2d2.jpg"
        alt="logo"
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className="menus">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
//Props==component hoorond ugugdul damjuulna. Zuwhun child ruga ugugdul damjuulna
//De structing==object zadlah person={name:"nar", age:90} ==> const {name, age}=person;

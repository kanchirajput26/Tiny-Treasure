import "./App.css";
import MyCarousel from "./component/carousel";
import PageActions from "./component/header";
import Typography from "@mui/material/Typography";
import Category from "./component/category";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <div className="App">
      <PageActions title="Tiny Treasure" />
      <MyCarousel />

      <Typography
        variant="h4"
        style={{
          marginTop: 25,
          marginBottom: 10,
          marginLeft: 20,
          fontSize: 20,
          color: "black",
          textAlign: "left",
        }}
      >
        Category
      </Typography>
      <Category />
      <div
        style={{
          marginTop:30,
          display: "grid",
          gridTemplateColumns: "2fr 1fr", // 2 columns, first one is twice as large as the second
          gridTemplateRows: "1fr 1fr", // 2 rows of equal height
        }}
      >
        <div style={{ gridRow: "span 2" }}>
          <img
            style={{ width: "1000px", height: "500px" }}
            src="https://s3-alpha-sig.figma.com/img/c85c/1b22/8d8117877a16e1032232e452faf6f733?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbeAaC4dNFuSgkvjL91KxBaERci7FKq29KHzdvxJK5fjBSJPIHIeYhYl9-8jZgy4IxL9aEDDucnAiNb7LiArRzs8w7FpowXI5dzb6SfN3TFe2vYpMxhFOmticuY8AuJaPyDXWkYbpFZ9AteY4eBMignq3ik6blJ-5bpu2jww0Pk2WFsORNTtKQe~3jlji0bL-05kymWnvHEIlyJ4bbXJ1OJCfsw8V9Aqpk8omSAopcFtpzzX7saWSEdlrDwW2IKCl60p4uN-ivWjbo21Olfn6c-LUEag6E3kx~6uVZv7asbbwRLZ5B2fTYX2B66NgYCv-HnR2Xvz4kH5iZi7kFWPEQ__"
            alt="placeholder"
          />
        </div>
        <div>
          <img
            style={{ width: "500px", height: "248px" }}
            src="https://s3-alpha-sig.figma.com/img/c85c/1b22/8d8117877a16e1032232e452faf6f733?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbeAaC4dNFuSgkvjL91KxBaERci7FKq29KHzdvxJK5fjBSJPIHIeYhYl9-8jZgy4IxL9aEDDucnAiNb7LiArRzs8w7FpowXI5dzb6SfN3TFe2vYpMxhFOmticuY8AuJaPyDXWkYbpFZ9AteY4eBMignq3ik6blJ-5bpu2jww0Pk2WFsORNTtKQe~3jlji0bL-05kymWnvHEIlyJ4bbXJ1OJCfsw8V9Aqpk8omSAopcFtpzzX7saWSEdlrDwW2IKCl60p4uN-ivWjbo21Olfn6c-LUEag6E3kx~6uVZv7asbbwRLZ5B2fTYX2B66NgYCv-HnR2Xvz4kH5iZi7kFWPEQ__"
            alt="placeholder"
          />
        </div>
        <div>
          <img
            style={{ width: "500px", height: "248px" }}
            src="https://s3-alpha-sig.figma.com/img/c85c/1b22/8d8117877a16e1032232e452faf6f733?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbeAaC4dNFuSgkvjL91KxBaERci7FKq29KHzdvxJK5fjBSJPIHIeYhYl9-8jZgy4IxL9aEDDucnAiNb7LiArRzs8w7FpowXI5dzb6SfN3TFe2vYpMxhFOmticuY8AuJaPyDXWkYbpFZ9AteY4eBMignq3ik6blJ-5bpu2jww0Pk2WFsORNTtKQe~3jlji0bL-05kymWnvHEIlyJ4bbXJ1OJCfsw8V9Aqpk8omSAopcFtpzzX7saWSEdlrDwW2IKCl60p4uN-ivWjbo21Olfn6c-LUEag6E3kx~6uVZv7asbbwRLZ5B2fTYX2B66NgYCv-HnR2Xvz4kH5iZi7kFWPEQ__"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

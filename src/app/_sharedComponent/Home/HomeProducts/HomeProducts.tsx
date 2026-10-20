import { getProducts } from "@/services/product.service";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { productResponse } from "@/interface/response.type";
import { Iproduct } from "@/interface/product.interface";
import Card from "../../Card/Card";

const HomeProducts = async () => {
  const products:productResponse = await  getProducts()
  // console.log("product",products);
  return (
    <div>
      <SectionTitle title={"Products"} subtitle="Featured"/>


      {/* products */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.data.map((product:Iproduct)=>{
              return <Card key={product._id} product={product}/>

            })}
          </div>

        </div>

      </section>

    </div>
  );
}

export default HomeProducts;

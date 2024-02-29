import "/productForm.scss";

const ProductForm = () => {
    return (
        <section className="productForm">
            <div>
                <input type="text" name="" id="" placeholder="Nombre del producto"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="descripción"></textarea>
                <input type="text" name="" id="" placeholder="Precio"/>
                <input type="number" name="" id="" placeholder="Stock"/>
                <input type="text" name="" id="" placeholder="Ruta de la imagen"/>
            </div>

        </section>
    );
};

export default ProductForm;

import { useState } from "react";
import useProducts from "./../../hooks/useProducts.js";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./productForm.scss";

import validationSchema from "./productFormValidate.js";

import InputField from "./inputField/InputField.jsx";
import Button from "../button/Button.jsx";
import Alert from "../alert/Alert.jsx";

const ProductForm = (props) => {
    const { initialValues } = props;

    const { createProduct, updateProduct } = useProducts();
    const [ openAlert, setOpenAlert ] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            values.id ? updateProduct(values) : createProduct(values);
            setOpenAlert(true);
        },
    });


    return (
        <Box
            component="form"
            className="form-product"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 25 }}>
            </InputField>

            <InputField
                label="Precio"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                errorMessage={formik.touched.price && formik.errors.price}
                inputProps={{ maxLength: 12 }}>
            </InputField>

            <InputField
                label="Stock"
                name="stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                errorMessage={formik.touched.stock && formik.errors.stock}
                inputProps={{ maxLength: 6 }}>
            </InputField>

            <InputField
                label="Descripción"
                name="description"
                multiline
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                errorMessage={formik.touched.description && formik.errors.description}
                inputProps={{ maxLength: 150 }}/>

            <InputField
                label="Ruta de la imagen"
                name="img"
                value={formik.values.img}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                errorMessage={formik.touched.image && formik.errors.image}
                inputProps={{ maxLength: 50 }}/>

            <Box
                className="form-product__image"
                component="img"
                src={formik.values.img}
                alt="Fotografía del producto"/>

            <Button type="submit">Guardar</Button>
            <Button
                component={NavLink}
                to="/"
                type="button"
                color="danger">
                        Cancelar
            </Button>
            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="El producto se ha procesado correctamente"
                redirectUrl="/"/>
        </Box>
    );
};

ProductForm.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }),
};

ProductForm.defaultProps = {
    initialValues: {
        name: "",
        description: "",
        img: "/images/defaultphone.jpg",
        stock: 0,
        price: 0,
    },
};

export default ProductForm;
import {ModalType} from "../../types/ModalType"
import {Product} from "../../types/Product"
import { Button, FormLabel, Modal } from "react-bootstrap"
import * as Yup from "yup";
import {useFormik} from "formik";
import { Form } from "react-router-dom";

type ProductModalProps = {
    show: boolean;
    onHide:() => void;
    title: string;
    modalType: ModalType;
    prod: Product;
}

const ProductModal = ({show,onHide,title,modalType,prod}: ProductModalProps) => {

    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required('El titulo es requerido'),
            description: Yup.string().min(0).required('El precio es requerido'),
            category: Yup.string().required('La categoria es requerida'),
            image: Yup.string(0).required('La URL de la imagen es Requerida'),
        });
    };

    const formik = useFormik({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),
    })

  return (
    <>
        {modalType === ModalType.DELETE} (
            <>Vacio por ahora</>
        ) : (
            <>
                <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {"Formulario"}
                        <Form onSubmit={formik.handleSubmit}>

                            {"Titulo"}
                            <Form.Group controlId="formTitulo">
                                <FormLabel>Titulo</FormLabel>
                                <Form.Control
                                    name="title"
                                    type="text"
                                    value={formik.values.title || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {"Precio"}
                            <Form.Group controlId="formPrice">
                                <FormLabel>Precio</FormLabel>
                                <Form.Control
                                    name="price"
                                    type="number"
                                    value={formik.values.title || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.price}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {"Descripcion"}
                            <Form.Group controlId="formDescription">
                                <FormLabel>Descripcion</FormLabel>
                                <Form.Control
                                    name="description"
                                    type="text"
                                    value={formik.values.description || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {"Categoria"}
                            <Form.Group controlId="formCategory">
                                <FormLabel>Categoria</FormLabel>
                                <Form.Control
                                    name="category"
                                    type="text"
                                    value={formik.values.category || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.category}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {"Imagen"}
                            <Form.Group controlId="formImage">
                                <FormLabel>Imagen</FormLabel>
                                <Form.Control
                                    name="image"
                                    type="text"
                                    value={formik.values.image || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.image}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Modal.Footer className="mt-4">
                                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    </>
  )
}

export default ProductModal
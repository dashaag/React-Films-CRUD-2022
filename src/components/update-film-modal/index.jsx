import { Form, Input, Button } from 'antd';
import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const UpdateFilmModal = ({ show, handleClose, activeFilm, updateFilm}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            image: activeFilm.image,
            name: activeFilm.name
        });
        
    }, [activeFilm, form])

    const onFinish = newFilm => {
        const film = {
            ...newFilm,
            id: activeFilm.id
        };

        updateFilm(film);

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update film</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form
                    onFinish={onFinish}
                    form={form}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    name="updateForm">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input name of film!',
                            },
                        ]}
                    >
                        <Input className='w-100' />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input image URL',
                            },
                        ]}
                    >
                        <Input className='w-100' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="w-100 mt-5" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>



            </Modal.Body>
        </Modal>
    )
}

export default UpdateFilmModal;
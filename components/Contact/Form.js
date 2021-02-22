//  import Detail from "./Detail";
// import { Form, Input, Button, Checkbox } from "antd";

// const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const tailLayout = {
//     wrapperCol: {
//       offset: 8,
//       span: 16,
//     },
//   };
//   const FormD = () => {
//     const onFinish = (values) => {
//       console.log("Success:", values);
//     };

//     const onFinishFailed = (errorInfo) => {
//       console.log("Failed:", errorInfo);
//     };

// //   return (
// //     <div class="section-space-all">
// //       <div class="container">
// //         <div class="row">
// //           <div class="col-md-8">
// //             <div class="section-title-primary">
// //               <h2>
// //                 Send Us a <span> Message</span>
// //               </h2>
// //             </div>
// //             <div class="contact-form-layout4 text-center">

// <Form
//       {...layout}
//       name="basic"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: "Please input your username!",
//           },
//         ]}
//       >
//         <Input placeholder="Name" />
//       </Form.Item>

//       <Form.Item
//         name="email"
//         rules={[
//           {
//             required: true,
//             message: "Please input your email!",
//           },
//         ]}
//       >
//         <Input placeholder="Email Address" />
//       </Form.Item>

//       <Form.Item
//         name="company"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Campany Name!",
//           },
//         ]}
//       >
//         <Input placeholder="Company" />
//       </Form.Item>

//       <Form.Item
//         name="Phone"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Phone Number!",
//           },
//         ]}
//       >
//         <Input placeholder="Phone" />
//       </Form.Item>

//       <Form.Item
//         name="text-area"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Phone Number!",
//           },
//         ]}
//       >
//         <textarea />
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>

// //               <form id="contact-form" novalidate="true">
// //                 <div class="row">
// //                   <div class="col-md-6 col-sm-6">
// //                     <div class="form-group">
// //                       <input
// //                         type="text"
// //                         class="form-control top-input"
// //                         name="name"
// //                         placeholder="Name"
// //                         data-error="Name field is required"
// //                         required=""
// //                       />
// //                       <div class="help-block with-errors"></div>
// //                     </div>
// //                   </div>
// //                   <div class="col-md-6 col-sm-6">
// //                     <div class="form-group">
// //                       <input
// //                         type="email"
// //                         class="form-control top-input"
// //                         name="email"
// //                         placeholder="Email address"
// //                         data-error="Email field is required"
// //                         required=""
// //                       />
// //                       <div class="help-block with-errors"></div>
// //                     </div>
// //                   </div>
// //                   <div class="col-md-6 col-sm-6">
// //                     <div class="form-group">
// //                       <input
// //                         type="text"
// //                         class="form-control top-input"
// //                         name="company"
// //                         placeholder="Company"
// //                         data-error="Company field is required"
// //                         required=""
// //                       />
// //                       <div class="help-block with-errors"></div>
// //                     </div>
// //                   </div>
// //                   <div class="col-md-6 col-sm-6">
// //                     <div class="form-group">
// //                       <input
// //                         type="text"
// //                         class="form-control top-input"
// //                         name="phone"
// //                         placeholder="Phone"
// //                         data-error="Phone field is required"
// //                         required=""
// //                       />
// //                       <div class="help-block with-errors"></div>
// //                     </div>
// //                   </div>
// //                   <div class="col-lg-12">
// //                     <div class="form-group">
// //                       <textarea
// //                         class="form-control message-box"
// //                         name="message"
// //                         data-error="Message field is required"
// //                         required=""
// //                       ></textarea>
// //                       <div class="help-block with-errors"></div>
// //                     </div>
// //                   </div>
// //                   <div class="col-lg-12">
// //                     <div class="form-group">
// //                       <button
// //                         class="btn-primary-fill-ghost disabled"
// //                         type="submit"
// //                       >
// //                         Submit Request
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div class="col-lg-12">
// //                     <div class="form-response"></div>
// //                   </div>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //           <div className="col-md-4">
// //             <Detail />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Form;

// // import { Form, Input, Button, Checkbox } from "antd";
// // const layout = {
// //   labelCol: {
// //     span: 8,
// //   },
// //   wrapperCol: {
// //     span: 16,
// //   },
// // };
// // const tailLayout = {
// //   wrapperCol: {
// //     offset: 8,
// //     span: 16,
// //   },
// // };

// // const FormD = () => {
// //   const onFinish = (values) => {
// //     console.log("Success:", values);
// //   };

// //   const onFinishFailed = (errorInfo) => {
// //     console.log("Failed:", errorInfo);
// //   };

// //   return (
// //     <Form
// //       {...layout}
// //       name="basic"
// //       initialValues={{
// //         remember: true,
// //       }}
// //       onFinish={onFinish}
// //       onFinishFailed={onFinishFailed}
// //     >
// //       <Form.Item
// //         name="username"
// //         rules={[
// //           {
// //             required: true,
// //             message: "Please input your username!",
// //           },
// //         ]}
// //       >
// //         <Input placeholder="Name" />
// //       </Form.Item>

// //       <Form.Item
// //         name="email"
// //         rules={[
// //           {
// //             required: true,
// //             message: "Please input your email!",
// //           },
// //         ]}
// //       >
// //         <Input placeholder="Email Address" />
// //       </Form.Item>

// //       <Form.Item
// //         name="company"
// //         rules={[
// //           {
// //             required: true,
// //             message: "Please input your Campany Name!",
// //           },
// //         ]}
// //       >
// //         <Input placeholder="Company" />
// //       </Form.Item>

// //       <Form.Item
// //         name="Phone"
// //         rules={[
// //           {
// //             required: true,
// //             message: "Please input your Phone Number!",
// //           },
// //         ]}
// //       >
// //         <Input placeholder="Phone" />
// //       </Form.Item>

// //       <Form.Item
// //         name="text-area"
// //         rules={[
// //           {
// //             required: true,
// //             message: "Please input your Phone Number!",
// //           },
// //         ]}
// //       >
// //         <textarea />
// //       </Form.Item>

// //       <Form.Item {...tailLayout}>
// //         <Button type="primary" htmlType="submit">
// //           Submit
// //         </Button>
// //       </Form.Item>
// //     </Form>
// //   );
// // };

// export default FormD;

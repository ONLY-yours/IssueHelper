"use client";
import { useState } from "react";
import { Col, Button, Form, Row, Input } from "antd";
import { GetIssue } from "../issue/api";
import styles from "./page.module.css";

const IssueGetPage = () => {
  const [issueList, setIssueList] = useState<Array<any>[]>([]);

  return (
    <Row className={styles.workBody}>
      <Col
        flex={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={async (value) => {
            setIssueList(
              await GetIssue({
                authToken: "xxx",
                repo: "ant-design/pro-components",
              })
            );
            console.log("value", value);
          }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Github-Token"
            name="token"
            rules={[
              { required: true, message: "Please input your Github Token!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="repo"
            name="repo"
            rules={[{ required: true, message: "Please input your repo!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              GetIssue
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col
        flex={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50vw",
          }}
        >
          {issueList.map((item, index) => {
            return <div key={index}>{item?.title}</div>;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default IssueGetPage;

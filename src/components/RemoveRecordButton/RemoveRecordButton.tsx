/** @jsxImportSource @emotion/react */

import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

export const RemoveRecordButton: React.FC = () => {
  return (
    <Button type="primary" danger icon={<ClearOutlined />}>
      Clear
    </Button>
  );
};

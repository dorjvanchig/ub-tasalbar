import { notification } from "antd";

export function medeeKharuulakh(turul, text, delgerengui) {
    notification.warning({
        message: text,
        description: delgerengui,
        placement: "topRight",
        style: { zIndex: 1304 },
    });
}

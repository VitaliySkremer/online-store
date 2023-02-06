import {useDeviceStore} from "../../store/useDeviceStore";
import {DeviceItem} from "./DeviceItem";
import {Row} from "react-bootstrap";

export const DeviceList = () => {

  const devices = useDeviceStore(state => state.devices)

  return (
    <Row className="d-flex">
      {devices.map(device=>
        <DeviceItem device={device} key={device.id}/>
      )}
    </Row>
  )
}
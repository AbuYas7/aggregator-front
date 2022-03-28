import React from "react";
import styles from "./ServiceCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditRemoveModal/EditModal";
import { useState } from "react";
import RemoveModal from "./EditRemoveModal/RemoveModal";
import moment from "moment";
import ServiceAdd from "./ServiceAdd";
import { loadServices } from "../../../redux/features/organization";

const ServiceCategory = ({ userCity }) => {
  const dispatch = useDispatch()
  const services = useSelector((state) => state.organization.services);
  //   console.log(services)


  const [currentItem, setCurrentItem] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  const handleShowEdit = (item) => {
    setShowEdit(!showEdit);
    setCurrentItem(item);
  };
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleShowRemove = (item) => {
    setShowRemove(!showRemove);
    setCurrentItem(item);
  };

  const handleReload = () => {
    dispatch(loadServices())
  }

  return (

    <div className={styles.wrapper}>
      <div className={styles.empthy}></div>

      <div className={styles.content}>
<div className={styles.servises}>
      <div className={styles.addServise}>
        <div style={{ display: 'flex', justyfyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={handleReload} className={styles.reloadBtn}></div>
          <h3>Список активных услуг</h3>
        </div>

        <button className={styles.addBtn} onClick={() => handleShowAdd()}>
          +Добавить услугу
        </button>
        {showAdd && (
          <ServiceAdd showAdd={showAdd} handleShowAdd={handleShowAdd} />
        )}
      </div>
      <div className={styles.ServisesMap}>
        <div
          style={{ fontSize: "48px", textAlign: "center" }}
        >
          {services.length > 0 ? "" : "Вы пока не разместили ни одну услугу"}
        </div>
        {services.map((item) => {
          return (
            <div className={styles.cart}>
              <div className={styles.name}>
                <p>{item.serviceName}</p>
                <p className={styles.time}>
                  🕐 {moment("20220321", "YYYYMMDD").fromNow()}
                </p>
              </div>
              <div className={styles.discription}>
                <div className={styles.spisane}>
                  <span>{item.description}</span>
                  <div className={styles.imgs}>3 фото</div>
                </div>
                <div className={styles.money}>
                  <p>Бюджет: {item.price}р</p>
                  <p>Регион: 1</p>
                </div>
              </div>
              <div
                style={{ width: "80%", margin: "auto", textAlign: "center" }}
              >
                <button
                  className={`${styles.editBtn} ${styles.button}`}
                  onClick={() => handleShowEdit(item)}
                  disabled={showEdit || showRemove}
                >
                  <span>Редактировать</span>
                </button>
                {showEdit ? (
                  <EditModal
                    showEdit={showEdit}
                    handleShowEdit={handleShowEdit}
                    item={currentItem}
                  />
                ) : (
                  ""
                )}

                <button
                  className={`${styles.removeBtn} ${styles.button}`}
                  onClick={() => handleShowRemove(item)}
                  disabled={showEdit || showRemove}
                >
                  <span>Удалить</span>
                </button>
                {showRemove ? (
                  <RemoveModal
                    showRemove={showRemove}
                    handleShowRemove={handleShowRemove}
                    item={currentItem}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>

      </div>
    </div>
    
  );
};

export default ServiceCategory;

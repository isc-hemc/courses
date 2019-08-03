from connect import getdriver
import pytest
import random


def test_apk():
    driver = getdriver()
    for i in range(10):
        name = random.choice(pytest.NAMES)
        phone = random.randint(10**8, 10**10)
        email = "".join(name.lower().split()) + "@gmail.com"
        driver.find_element_by_xpath(pytest.OPTIONS_XPATH).click()
        driver.find_element_by_id(pytest.ADDCONTANCT_ID).click()
        driver.find_element_by_id(pytest.NAME_ID).send_keys(name)
        driver.find_element_by_id(pytest.PHONE_ID).send_keys(phone)
        driver.find_element_by_id(pytest.EMAIL_ID).send_keys(email)
        if random.choice([True, False]):
            driver.find_element_by_id(pytest.STORE_BTN_ID).click()
            continue
        driver.find_element_by_id(pytest.CANCEL_BTN_ID).click()


pytest.OPTIONS_XPATH = '//android.widget.ImageView[@content-desc="Más opciones"]'
pytest.ADDCONTANCT_ID = "itch.varptini.agenda:id/title"
pytest.NAME_ID = "itch.varptini.agenda:id/ETNombre"
pytest.PHONE_ID = "itch.varptini.agenda:id/ETTelefono"
pytest.EMAIL_ID = "itch.varptini.agenda:id/ETeMail"
pytest.CANCEL_BTN_ID = "itch.varptini.agenda:id/BTCancelar"
pytest.STORE_BTN_ID = "itch.varptini.agenda:id/BTGuardar"
pytest.NAMES = [
    "David Martinez",
    "Carlos Hernandez",
    "Roberto Calderon",
    "Said Naranjo",
    "Ivan Victoriano",
    "King Lee",
    "Jordy Cuan",
    "Nataly Martinez",
    "Luz Martinez",
    "Roberto Reyes",
    "Yali Reyes",
    "Justine Soto",
    "Paulina Mendoza",
    "Emilia Quijano",
    "Antonio Quijano",
    "Gustavo Paez",
    "Chadwick Carreto"
]
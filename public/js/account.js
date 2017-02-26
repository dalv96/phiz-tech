'use scrict'

function blockAcc() {
    if(confirm("Вы уверены, что хотите заблокировать этого пользователя?")) {
        $.ajax({
            method: "PUT",
            url: location.href +'/block',
            succes: location=location
        });
    }
    return false;
}

function deleteAcc() {
    if(confirm("Вы уверены, что хотите удалить этого пользователя?")) {
        $.ajax({
            method: "DELETE",
            url: location.href +'/delete',
            succes: location= '/admin/users'
        });
    }
    return false;
}

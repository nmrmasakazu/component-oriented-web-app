CREATE TABLE user (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL UNIQUE,
  username varchar(255) NOT NULL UNIQUE
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_roles (
  user_id BIGINT NOT NULL,
  roles BIGINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE promise (
    id BIGINT auto_increment PRIMARY KEY,
    round BIGINT NOT NULL,
    comment_ch VARCHAR(500),
    activity_1_ch VARCHAR(255),
    activity_2_ch VARCHAR(255),
    activity_3_ch VARCHAR(255),
    activity_4_ch VARCHAR(255),
    point_1_ch INT,
    point_2_ch INT,
    point_3_ch INT,
    point_4_ch INT,
    activity_1_ch_user VARCHAR(255),
    activity_2_ch_user VARCHAR(255),
    activity_3_ch_user VARCHAR(255),
    activity_4_ch_user VARCHAR(255),
    comment_tr VARCHAR(500),
    activity_1_tr VARCHAR(255),
    activity_2_tr VARCHAR(255),
    activity_3_tr VARCHAR(255),
    point_1_tr INT,
    point_2_tr INT,
    point_3_tr INT,
    activity_1_tr_user VARCHAR(255),
    activity_2_tr_user VARCHAR(255),
    activity_3_tr_user VARCHAR(255),
    activity_tr_time VARCHAR(255),
    update_time DATETIME,
    update_time_user DATETIME,
    user_id BIGINT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE item_ch (
    id BIGINT auto_increment PRIMARY KEY,
    item VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_item_ch (
    id BIGINT auto_increment PRIMARY KEY,
    item_id BIGINT,
    user_id BIGINT,
    FOREIGN KEY(item_id) REFERENCES item_ch(id),
    FOREIGN KEY(user_id) REFERENCES user(id)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE item_tr (
    id BIGINT auto_increment PRIMARY KEY,
    item VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_item_tr (
    id BIGINT auto_increment PRIMARY KEY,
    item_id BIGINT,
    user_id BIGINT,
    FOREIGN KEY(item_id) REFERENCES item_tr(id),
    FOREIGN KEY(user_id) REFERENCES user(id)
) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CREATE TABLE wakka_target (
--     id BIGINT auto_increment PRIMARY KEY,
--     name VARCHAR(20) NOT NULL,
--     times double,
--     forces double
-- ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CREATE TABLE wakka_result (
--     id BIGINT auto_increment PRIMARY KEY,
--     trial BIGINT,
--     times DOUBLE,
--     forces DOUBLE,
--     eye_x DOUBLE,
--     eye_y DOUBLE,
--     promise_id BIGINT NOT NULL,
--     target_name VARCHAR(20) NOT NULL,
--     FOREIGN KEY(promise_id) REFERENCES promise(id)
-- ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

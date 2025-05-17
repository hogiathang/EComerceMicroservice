-- Insert sample users
INSERT INTO users (id, username, password, date_modify) VALUES
                                                            ('11111111-1111-1111-1111-111111111111', 'thangdev', '1234', CURRENT_TIMESTAMP),
                                                            ('22222222-2222-2222-2222-222222222222', 'hoangadmin', '1234', CURRENT_TIMESTAMP);

-- Insert sample roles
INSERT INTO role (user_id, role) VALUES
                                     ('11111111-1111-1111-1111-111111111111', 'ROLE_USER'),
                                     ('11111111-1111-1111-1111-111111111111', 'ROLE_ADMIN'),
                                     ('22222222-2222-2222-2222-222222222222', 'ROLE_ADMIN');

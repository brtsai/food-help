class User < ApplicationRecord
  validates :password_digest, :profile_picture_url, :city, :state, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  validates :session_token, presence: true, uniqueness: true

  has_many :businesses,
    foreign_key: :owner_id,
    primary_key: :id,
    class_name: :Business
  has_many :reviews

  attr_reader :password
  after_initialize :ensure_session_token!

  def self.find_by_credentials(creds)
    user = User.find_by_username(creds[:username])
    return nil unless user && user.is_password?(creds[:password])
    user
  end
  
  def password=(new_password)
    @password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token ||= generate_session_token
  end


end

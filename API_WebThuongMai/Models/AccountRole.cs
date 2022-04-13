using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class AccountRole
    {
        public AccountRole()
        {
            Account = new HashSet<Account>();
        }

        public int AccountRoleId { get; set; }
        public string AccountRoleName { get; set; }

        public virtual ICollection<Account> Account { get; set; }
    }
}

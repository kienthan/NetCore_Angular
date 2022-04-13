using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API_WebThuongMai.Models
{
    public partial class ThuongMaiDienTuContext : DbContext
    {
       /* public ThuongMaiDienTuContext()
        {
        }*/

        public ThuongMaiDienTuContext(DbContextOptions<ThuongMaiDienTuContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<AccountRole> AccountRole { get; set; }
        public virtual DbSet<DonHang> DonHang { get; set; }
        public virtual DbSet<DonHangInfor> DonHangInfor { get; set; }
        public virtual DbSet<Feedback> Feedback { get; set; }
        public virtual DbSet<Infor> Infor { get; set; }
        public virtual DbSet<ProductListCheckout> ProductListCheckout { get; set; }
        public virtual DbSet<SanPham> SanPham { get; set; }
        public virtual DbSet<SanPhamDetail> SanPhamDetail { get; set; }
        public virtual DbSet<Size> Size { get; set; }
        public virtual DbSet<ThanhToan> ThanhToan { get; set; }
        public virtual DbSet<TinhTrangDonHang> TinhTrangDonHang { get; set; }
        public virtual DbSet<TypeSanPham> TypeSanPham { get; set; }

       /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAPTOP-O6NDE1NG\\SQLEXPRESS;Database=ThuongMaiDienTu;Integrated Security=True");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AccountPassword)
                    .HasColumnName("Account_password")
                    .HasMaxLength(30)
                    .IsFixedLength();

                entity.Property(e => e.AccountRoleId).HasColumnName("Account_role_id");

                entity.Property(e => e.AccountUser)
                    .HasColumnName("Account_user")
                    .HasMaxLength(30)
                    .IsFixedLength();

                entity.HasOne(d => d.AccountRole)
                    .WithMany(p => p.Account)
                    .HasForeignKey(d => d.AccountRoleId)
                    .HasConstraintName("FK_Account_Account_role");
            });

            modelBuilder.Entity<AccountRole>(entity =>
            {
                entity.ToTable("Account_role");

                entity.Property(e => e.AccountRoleId).HasColumnName("Account_role_id");

                entity.Property(e => e.AccountRoleName)
                    .HasColumnName("Account_role_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DonHang>(entity =>
            {
                entity.Property(e => e.DonHangId).HasColumnName("DonHang_id");

                entity.Property(e => e.AccountId).HasColumnName("Account_ID");

                entity.Property(e => e.DonHangInforId).HasColumnName("DonHangInfor_id");

                entity.Property(e => e.NgayGio).HasColumnType("datetime");

                entity.Property(e => e.PhuongThucThanhToan).HasMaxLength(50);

                entity.Property(e => e.TinhTrangDonHangId).HasColumnName("TinhTrangDonHang_id");

                entity.Property(e => e.TinhTrangThanhToan).HasMaxLength(50);

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.DonHang)
                    .HasForeignKey(d => d.AccountId)
                    .HasConstraintName("FK_DonHang_Account");

                entity.HasOne(d => d.DonHangInfor)
                    .WithMany(p => p.DonHang)
                    .HasForeignKey(d => d.DonHangInforId)
                    .HasConstraintName("FK_DonHang_DonHangInfor1");

                entity.HasOne(d => d.TinhTrangDonHang)
                    .WithMany(p => p.DonHang)
                    .HasForeignKey(d => d.TinhTrangDonHangId)
                    .HasConstraintName("FK_DonHang_TinhTrangDonHang");
            });

            modelBuilder.Entity<DonHangInfor>(entity =>
            {
                entity.Property(e => e.DonHangInforId).HasColumnName("DonHangInfor_id");

                entity.Property(e => e.DiaChi).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.HoTen).HasMaxLength(50);

                entity.Property(e => e.PhuongXa).HasMaxLength(50);

                entity.Property(e => e.QuanHuyen).HasMaxLength(50);

                entity.Property(e => e.Sdt).HasMaxLength(50);

                entity.Property(e => e.TinhThanh).HasMaxLength(50);
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.Property(e => e.FeedbackId).HasColumnName("Feedback_id");
            });

            modelBuilder.Entity<Infor>(entity =>
            {
                entity.Property(e => e.InforId).HasColumnName("Infor_id");

                entity.Property(e => e.AccountId).HasColumnName("Account_id");

                entity.Property(e => e.BuyHistory).HasMaxLength(50);

                entity.Property(e => e.DiaChi).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Phone).HasMaxLength(50);

                entity.Property(e => e.PhuongXa).HasMaxLength(50);

                entity.Property(e => e.QuanHuyen).HasMaxLength(50);

                entity.Property(e => e.TinhThanh).HasMaxLength(50);

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.Infor)
                    .HasForeignKey(d => d.AccountId)
                    .HasConstraintName("FK_Infor_Account");
            });

            modelBuilder.Entity<ProductListCheckout>(entity =>
            {
                entity.Property(e => e.ProductListCheckoutId).HasColumnName("ProductListCheckout_id");

                entity.Property(e => e.DonHangId).HasColumnName("DonHang_id");

                entity.Property(e => e.SanPhamId).HasColumnName("SanPham_id");

                entity.Property(e => e.Size).HasMaxLength(50);

                entity.Property(e => e.StringPrice).HasMaxLength(50);

                entity.HasOne(d => d.DonHang)
                    .WithMany(p => p.ProductListCheckout)
                    .HasForeignKey(d => d.DonHangId)
                    .HasConstraintName("FK_ProductListCheckout_DonHang");

                /*entity.HasOne(d => d.SanPham)
                    .WithMany(p => p.ProductListCheckout)
                    .HasForeignKey(d => d.SanPhamId)
                    .HasConstraintName("FK_ProductListCheckout_SanPham");*/
            });

            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.Property(e => e.SanPhamId).HasColumnName("SanPham_Id");

                entity.Property(e => e.MainImg).HasColumnName("Main_img");

                entity.Property(e => e.SaleKey).HasColumnName("Sale_key");

                entity.Property(e => e.SanPhamDescription).HasColumnName("SanPham_description");

                entity.Property(e => e.SanPhamDetailId).HasColumnName("SanPhamDetail_id");

                entity.Property(e => e.SanPhamName)
                    .HasColumnName("SanPham_Name")
                    .HasMaxLength(50);

                entity.Property(e => e.SanPhamPrice).HasColumnName("SanPham_Price");

                entity.Property(e => e.SanPhamPriceSale).HasColumnName("SanPham_priceSale");

                entity.Property(e => e.StringPrice).HasMaxLength(50);

                entity.Property(e => e.TypeSanPhamId).HasColumnName("Type_SanPham_id");

                /*entity.HasOne(d => d.SanPhamDetail)
                    .WithMany(p => p.SanPham)
                    .HasForeignKey(d => d.SanPhamDetailId)
                    .HasConstraintName("FK_SanPham_SanPhamDetail");

                entity.HasOne(d => d.TypeSanPham)
                    .WithMany(p => p.SanPham)
                    .HasForeignKey(d => d.TypeSanPhamId)
                    .HasConstraintName("FK_SanPham_Type_SanPham");*/
            });

            modelBuilder.Entity<SanPhamDetail>(entity =>
            {
                entity.Property(e => e.SanPhamDetailId).HasColumnName("SanPhamDetail_id");

                entity.Property(e => e.Xl).HasColumnName("XL");

                entity.Property(e => e.Xxl).HasColumnName("XXL");
            });

            modelBuilder.Entity<Size>(entity =>
            {
                entity.Property(e => e.SizeId)
                    .HasColumnName("Size_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.SizeName)
                    .HasColumnName("Size_name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ThanhToan>(entity =>
            {
                entity.Property(e => e.ThanhToanId).HasColumnName("ThanhToan_id");
            });

            modelBuilder.Entity<TinhTrangDonHang>(entity =>
            {
                entity.Property(e => e.TinhTrangDonHangId)
                    .HasColumnName("TinhTrangDonHang_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.TinhTrangDonHangName)
                    .HasColumnName("TinhTrangDonHang_name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TypeSanPham>(entity =>
            {
                entity.ToTable("Type_SanPham");

                entity.Property(e => e.TypeSanPhamId).HasColumnName("Type_SanPham_id");

                entity.Property(e => e.TypeName)
                    .HasColumnName("Type_name")
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
